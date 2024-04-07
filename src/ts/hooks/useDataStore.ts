const useDataStore = (): { setData: Function, getData: Function } => {

    const initialState: { data: Array<any> } = {
        data: []
    }

    // closure 1 capture la variable data
    const setData = (val: any, reset: boolean) => {
        if (reset) {
            initialState.data = []
        }
        if (val && !reset) {
            initialState.data.push(val)
        }
    }

    //closure 2 capture la variable data
    const getData = () => initialState.data


    return {
        setData,
        getData
    }
}