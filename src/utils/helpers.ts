// import { Action } from "@ngrx/store";

// /*
//  * logStore is a helper for logging reducer stuff.
//  */

// type LogLabel = "ACTION"
//   | "REDUCER CASE"
//   | "ACTION PAYLOAD"
//   | "ACTION TYPE";

// export const logStore = (label: LogLabel, action: Action) => {
//   let data;

//   switch (label) {
//     case "ACTION":
//       data = action;
//       break;

//     case "ACTION TYPE":
//     case "REDUCER CASE":
//       data = action.type;
//       break;

//     case "ACTION PAYLOAD":
//       data = action.payload;
//       break;

//     default:
//       data = action;
//       break;
//   }

//   console.log(label + ":", data);
// }

// export function objectToQueryString(params: any): string {
//   let parts: Array<string> = [];

//   for (let p in params) {
//     if (params.hasOwnProperty(p)) {
//       let part: string = `${encodeURIComponent(p)}=${encodeURIComponent(params[p])}`;
//       parts.push(part);
//     }
//   }

//   return parts.join("&");
// }
