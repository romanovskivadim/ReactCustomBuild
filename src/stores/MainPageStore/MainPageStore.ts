import { action, computed, makeAutoObservable } from "mobx";
import { API_ENDPOINTS } from "src/apiServices/apiEndpoints";
import { axiosRequest } from "src/services/axiosInstance";
import { requestHelper } from "src/services/requestHelper";

export class MainPageStoreClass {
    unicornsList: Record<string, string | number>[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    getListUnicornAction = () => (
        requestHelper.axiosRequestHandler(axiosRequest.get(API_ENDPOINTS.get()))
    );

    @action async getListUnicorn() {
        const resp = await this.getListUnicornAction()
        if(resp.length) {
            this.unicornsList = resp;
        }
    }

    @computed get unicorns() {
        return this.unicornsList;
    }
}

export const MainPageStore = new MainPageStoreClass();
