import { IBanner } from "../../models/dataPage/IBanner";
import {IBody} from "../../models/dataPage/IBody";

export interface IPage {
    title: string;
    logo: string;
    banner: IBanner[];
    body: IBody;
    loading: boolean;
    error: string;
}