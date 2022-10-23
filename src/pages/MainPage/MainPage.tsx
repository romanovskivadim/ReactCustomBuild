import { observer } from "mobx-react-lite";
import React, {useEffect} from "react";
import { ListComponent } from "src/components";
import { MainPageStore } from "src/stores/MainPageStore/MainPageStore";

const store = MainPageStore;

const MainPage = observer(() =>{
    useEffect(() => {
        store.getListUnicorn();
    }, [])
    
    return (
        <ListComponent listData={store.unicorns} />
    )
})

export default MainPage
