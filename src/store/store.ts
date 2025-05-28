import { makeObservable } from "mobx";
import { ActionDispatch } from "react";

export class StoreMobx {
    private isloading = true;
    private isPostLoading = false;
    private posts = []

    constructor() {
        makeObservable (this, {



            setPostsLoadinfStatus: Action,

        });
    }
}


