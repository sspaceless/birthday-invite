import { GUESTS } from "../config/guests.const";

class GuestService {
  async getData(inviteId: string) {
    return GUESTS.find((item) => item.id === inviteId) || null;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GuestService();
