import {IDataPage} from "../../../shared/models/dataPage/IDataPage";
import {IBanner} from "../../../shared/models/dataPage/IBanner";

class DataServices {

    private readonly data = require("../../../assets/data/dataPage.json") as IDataPage;

    public getAllData = (): IDataPage => this.data;

    public getAllBanner = (): IBanner[] => this.data.banner;

    public getBannerByIndex = (index: number): IBanner => this.data.banner[index];
}

export default new DataServices();