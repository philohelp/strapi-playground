import { request } from "@strapi/helper-plugin";

const expoNotificationsRequests = {
  getAllNotifications: async () => {
    return await request("/expo-notifications/find", {
      method: "GET",
    });
  },

  createNotification: async (data) => {
    return await request(`/expo-notifications/create`, {
      method: "POST",
      body: { data: data },
    });
  },

  editNotification: async (id, data) => {
    return await request(`/expo-notifications/update/${id}`, {
      method: "PUT",
      body: { data: data },
    });
  },

  deleteNotification: async (id) => {
    return await request(`/expo-notifications/delete/${id}`, {
      method: "DELETE",
    });
  },
};

export default expoNotificationsRequests;
