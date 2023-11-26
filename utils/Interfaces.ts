export interface IData {
    id: string
    name: string
    floor_plans: IImageData[]
    stills: IImageData[]
    virtual_tours: IVirtualToursData[]
    floor_plan_archive_download_url: string
    stills_archive_download_url: string
}

export interface IDataGrid {
    virtualTours: IData["virtual_tours"]
    stills: IData["stills"]
    floorPlans: IData["floor_plans"]
    floorArchiveUrl: string
    stillsArchiveUrl: string
}

export interface IVirtualToursData {
    id: string
    url: string
    thumbnail: string
}

export interface IImageData {
    original: string
    thumbnail: string
}