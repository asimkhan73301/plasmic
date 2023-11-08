/**
 * Utility functions that makes requests on the sockeetHost to
 * broadcast messages to websocket listeners.
 */
import { Request } from "express";
import fetch from "node-fetch";
import { BroadcastPayload } from "./app-socket-backend-real";
import "./extensions";
import { logError } from "./server-util";

export async function disconnectUserSockets(req: Request) {
  const socketHost = getSocketHost();
  const sessionId = req.sessionID;
  if (!socketHost || !sessionId) {
    return;
  }

  try {
    const resp = await fetch(`${socketHost}/api/v1/disconnect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sessionId }),
    });
    return await resp.json();
  } catch (err) {
    logError(err, `Socket disconnect`);
    return undefined;
  }
}

export async function broadcastProjectsMessage(message: BroadcastPayload) {
  const socketHost = getSocketHost();

  try {
    const resp = await fetch(`${socketHost}/api/v1/projects/broadcast`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    return await resp.json();
  } catch (err) {
    logError(err, `Socket broadcast`);
    return undefined;
  }
}

export async function emitUserToken(
  req: Request,
  email: string,
  initToken: string,
  authToken: string
) {
  const socketHost = getSocketHost();

  try {
    const resp = await fetch(`${socketHost}/api/v1/cli/emit-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        initToken,
        authToken,
      }),
    });
    return await resp.json();
  } catch (err) {
    logError(err, `Socket broadcast`);
    return undefined;
  }
}

function getSocketHost() {
  const socketHost = process.env["SOCKET_HOST"];
  if (socketHost) {
    return socketHost;
  }
  const backendPort = process.env["BACKEND_PORT"];
  return `http://localhost:${backendPort || 3004}`;
}
