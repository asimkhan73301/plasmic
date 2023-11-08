// TODO: fix non-unique keys based on class name
export const STUDIO_ELEMENTS_TARGETS = {
  studio: ".studio",
  topBar: ".canvas-editor__top-bar",
  studioAddElement: `[data-test-id="add-button"]`,
  studioAddDrawer: `[data-test-id="add-drawer"]`,
  addDrawerInput: `input[id^="downshift"]`,
  addDrawerTableBlock: `[data-plasmic-add-item-name="Table"]`,
  addDrawerFormBlock: `[data-plasmic-add-item-name="Form"]`,
  nodeOutlineTag: `.node-outline-tag`,
  hoverBoxControls: `.HoverBox__Controls`,
  editorTabs: `.nav-tabs.hilite-tabs`,
  editorTabsSettings: `#nav-tab-settings`,
  editorTabsStyle: `#nav-tab-style`,
  editorTabsComponents: `#nav-tab-component`,
  dataQueriesSection: "#data-queries-section",
  dataQueryAddBtn: "#data-queries-add-btn",
  dataSourceModalAnimatedMountState: ".animated-bottom-modal-mount",
  dataSourceModalDraftSection: "#data-source-modal-draft-section",
  dataSourceModalPreviewSection: "#data-source-modal-preview-section",
  dataSourceModalPickIntegration: "#data-source-modal-pick-integration-btn",
  dataSourceModalPickOperation: "#data-source-modal-pick-operation-btn",
  dataSourceModalPickResource: `[data-plasmic-prop="data-source-modal-pick-resource-btn"]`,
  dataSourceModalFieldUpdates: `[data-test-id="data-source-draft-variables"]`,
  dataSourceModalFilters: `[data-test-id="data-source-draft-conditions"]`,
  dataSourceModalSaveBtn: "#data-source-modal-save-btn",
  studioLeftPane: ".canvas-editor__left-pane",
  studioRightPane: ".canvas-editor__right-pane",
  tplTreeFocused: ".tpltree__label--focused",
  componentModeSection: "#component-mode-section",
  componentPropsSection: "#component-props-section",
  componentPropsPickDataQuery: `[data-test-id="prop-editor-row-data"]`,
  componentPropsFormItems: `[data-test-id="prop-editor-row-formItems"]`,
  componentPropsInitialValues: `[data-test-id="prop-editor-row-initialValues"]`,
  componentPropsFormLayout: `[data-test-id="prop-editor-row-layout"]`,
  sidebarModal: "#sidebar-modal",
  sidebarModalClose: `#sidebar-modal [data-test-id="close-sidebar-modal"]`,
  topBarPublishBtn: "#topbar-publish-btn",
  projNavBtn: "#proj-nav-button",
  projPanelPlusBtn: "#proj-panel-plus-btn",
  pageSettings: "#sidebar-page-meta",
  pageSettingsUrl: `[data-test-id="page-path"]`,
  pageUrlParameters: "#sidebar-page-url-parameters",
  queryBuilderScope: ".plasmic-query-builder-scope",
  avatar: ".Avatar",
  formItemsAdd: `[data-test-id="prop-editor-row-formItems"] .list-box__add-placeholder`,
  formItemSidebarControlLabel: `#object-prop-editor-modal [data-test-id="prop-editor-row-label"]`,
  formItemSidebarControlType: `#object-prop-editor-modal [data-test-id="prop-editor-row-inputType"]`,
  formItemSidebarControlName: `#object-prop-editor-modal [data-test-id="prop-editor-row-name"]`,
  interactionsSection: "#component-interactions-section",
  interactionsAddBtn: `[data-test-id="add-interaction"]`,
  interactionsOptionList: `.rc-virtual-list-holder`,
  interactionsSelect: "#interactions-select",
  interactionsSelectOptSubmit: "#interactions-select-opt-onFinish",
  actionBuilderName: `[data-plasmic-prop="action-name"]`,
  configureOperationBtn: `#configure-operation-btn`,
  dataPicker: `[data-test-id="data-picker"]`,
  dataPickerFirstColumn: "#data-picker-column-0",
  dataPickerTableSelectedRow: `[data-test-id="data-picker"] [data-test-id="0-table → selectedRow"]`,
  componentPropsData: `[data-test-id="prop-editor-row-data"]`,
  componentPropsSelectRows: `[data-test-id="prop-editor-row-canSelectRows"]`,
  interactiveCanvasSwitch: "#interactive-canvas-switch",
  canvasFrameContainer: ".CanvasFrame__Container",
};

export const TOPFRAME_ELEMENTS_TARGETS = {
  publishFlowDialogRoot: "#publish-flow-dialog-root",
  publishFlowDialogVersionSection: "#publish-flow-dialog-root > :first-child",
  publishFlowDialogPublishBtn: "#publish-flow-dialog-publish-btn",
  publishFlowDialogAddWebsitePanel: "#publish-flow-dialog-add-website-panel",
  publishFlowDialogAddWebsiteBtn: "#publish-flow-dialog-add-website-btn",
  plasmicHostingSubsection: "#plasmic-hosting-subsection",
};
