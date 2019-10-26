// CONSTANTS
export const UPDATE_SERVICEWORKER = "UPDATE_SERVICEWORKER";

export function updateServiceWorker() {
  return {
    type: UPDATE_SERVICEWORKER
  };
}

export const reducer = (
  state = {
    serviceWorkerUpdated: false
  },
  action
) => {
  switch (action.type) {
    case UPDATE_SERVICEWORKER: {
      return {
        ...state,
        serviceWorkerUpdated: true
      };
    }
    default:
      return state;
  }
};
