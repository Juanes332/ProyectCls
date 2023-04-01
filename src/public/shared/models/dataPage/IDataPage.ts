import {IBanner} from "./IBanner";
import {IBody} from "./IBody";

export interface IDataPage {
    title: string;
    logo: string;
    banner: IBanner[];
    body: IBody;
}