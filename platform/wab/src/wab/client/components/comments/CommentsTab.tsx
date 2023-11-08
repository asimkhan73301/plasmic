// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { Dropdown, Menu } from "antd";

import { observer } from "mobx-react-lite";
import * as React from "react";
import { useState } from "react";
import { mutate } from "swr";
import { TplNode } from "../../../classes";
import { xGroupBy, xSymmetricDifference } from "../../../common";
import { ApiComment, CommentThreadId } from "../../../shared/ApiSchema";
import { isTplNamable } from "../../../tpls";
import { apiKey } from "../../api";
import { useViewCtxMaybe } from "../../contexts/StudioContexts";
import {
  DefaultCommentsTabProps,
  PlasmicCommentsTab,
} from "../../plasmic/plasmic_kit_comments/PlasmicCommentsTab";
import { useStudioCtx } from "../../studio-ctx/StudioCtx";
import { SidebarModal, SidebarModalProvider } from "../sidebar/SidebarModal";
import { useCommentViews } from "./CommentViews";

export const DEFAULT_NOTIFICATION_LEVEL = "all";
export const notifyAboutKeyToLabel = {
  all: "All comments",
  "mentions-and-replies": "Replies only",
  none: "None",
} as const;

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface CommentsTabProps extends Omit<DefaultCommentsTabProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultCommentsTabProps altogether and have
// total control over the props for your component.
export interface CommentsTabProps extends DefaultCommentsTabProps {}

export const CommentsTab = observer(function CommentsTab(
  props: CommentsTabProps
) {
  const studioCtx = useStudioCtx();
  const viewCtx = useViewCtxMaybe();

  const [shownThreadId, setShownThreadId] =
    useState<CommentThreadId | undefined>(undefined);

  let focusedTpl = viewCtx?.focusedTpl();
  if (!isTplNamable(focusedTpl)) {
    focusedTpl = null;
  }

  const maybeCommentViews = useCommentViews(studioCtx, viewCtx);

  if (!maybeCommentViews) {
    return null;
  }

  const {
    bundler,
    allComments,
    userMap,
    deriveLabel,
    renderComment,
    renderFullThread,
    renderPostForm,
    getCurrentVariants,
  } = maybeCommentViews;

  function renderThreadPreview(threadComments: ApiComment[]) {
    const [comment] = threadComments;
    const subject = bundler.objByAddr(comment.data.location.subject);
    const isSelected = viewCtx?.focusedTpl() === subject;
    const label = deriveLabel(subject);

    const threadId = comment.data.threadId;

    return (
      <>
        {renderComment(
          comment,
          label,
          threadComments.length > 1
            ? `${threadComments.length - 1} replies`
            : "Reply",
          async () => {
            const ownerComponent = studioCtx
              .tplMgr()
              .findComponentContainingTpl(subject as TplNode);
            if (ownerComponent) {
              await studioCtx.setStudioFocusOnTpl(
                ownerComponent,
                subject as TplNode
              );
              studioCtx.centerFocusedFrame(1);
            }
            setShownThreadId(threadId);
          }
        )}
        <SidebarModal
          show={shownThreadId === threadId}
          onClose={() => setShownThreadId(undefined)}
          title={label}
        >
          {renderFullThread(threadComments, threadId)}
        </SidebarModal>
      </>
    );
  }

  function isCommentForSelection(comment: ApiComment) {
    const subject = bundler.objByAddr(comment.data.location.subject);
    const variants = comment.data.location.variants.map((v) =>
      bundler.objByAddr(v)
    );
    const isSelected =
      viewCtx?.focusedTpl() === subject &&
      xSymmetricDifference(variants, getCurrentVariants()).length === 0;
    return isSelected;
  }

  const commentsForSelection = xGroupBy(
    allComments.filter((comment) => isCommentForSelection(comment)),
    (comment) => comment.data.threadId
  );
  const commentsForOther = xGroupBy(
    allComments.filter((comment) => !isCommentForSelection(comment)),
    (comment) => comment.data.threadId
  );

  const projectId = studioCtx.siteInfo.id;
  const branchId = studioCtx.branchInfo()?.id;
  function refresh() {
    return mutate(apiKey("getComments", projectId, branchId));
  }

  const selfNotificationSettings =
    studioCtx.commentsData?.[0].selfNotificationSettings;
  const currentNotificationLevel =
    selfNotificationSettings?.notifyAbout ?? DEFAULT_NOTIFICATION_LEVEL;
  return (
    <div
      className={"comments-tab flex-even"}
      style={{
        overflow: "scroll",
      }}
    >
      <SidebarModalProvider containerSelector=".comments-tab">
        <PlasmicCommentsTab
          {...props}
          emptySelection={!focusedTpl}
          notificationsButton={{
            props: {
              children: `Notifications: ${notifyAboutKeyToLabel[currentNotificationLevel]}`,
            },
            wrap: (node) => (
              <Dropdown
                overlay={
                  <Menu selectedKeys={[currentNotificationLevel]}>
                    <Menu.ItemGroup title={"Notify me about"}>
                      {Object.entries(notifyAboutKeyToLabel).map(
                        ([key, label]) => (
                          <Menu.Item
                            key={key}
                            onClick={async () => {
                              await studioCtx.appCtx.api.updateNotificationSettings(
                                projectId,
                                branchId,
                                {
                                  ...selfNotificationSettings,
                                  notifyAbout: key as any,
                                }
                              );
                              await refresh();
                            }}
                          >
                            {label}
                          </Menu.Item>
                        )
                      )}
                    </Menu.ItemGroup>
                  </Menu>
                }
              >
                {node}
              </Dropdown>
            ),
          }}
          currentlySelectedTitle={{
            wrap: focusedTpl ? (it) => it : () => null,
          }}
          currentlySelectedSubject={{
            children: focusedTpl ? deriveLabel(focusedTpl) : undefined,
          }}
          currentlySelectedPrefix={
            commentsForSelection.size > 0
              ? {}
              : { children: "Comment on selected" }
          }
          currentThreadsList={{
            children: [...commentsForSelection.values()].map((threadComments) =>
              renderThreadPreview(threadComments)
            ),
          }}
          newThreadForm={{
            render: () => (focusedTpl ? renderPostForm() : null),
          }}
          restThreadsSection={{
            wrap: (node) => commentsForOther.size > 0 && node,
          }}
          restThreadsList={{
            children: [...commentsForOther.values()].map((threadComments) =>
              renderThreadPreview(threadComments)
            ),
          }}
        />
      </SidebarModalProvider>
    </div>
  );
});

export default CommentsTab;
