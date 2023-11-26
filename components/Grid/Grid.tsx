import { IDataGrid } from "../../utils/Interfaces";
import { gridItemTitles } from "../../utils/constants";

import GridItem from "./GridItem";

interface Props {
    data: IDataGrid
}

const Grid = ({ data }: Props) => {
    const { virtualTours, floorPlans, stills, floorArchiveUrl, stillsArchiveUrl } = data;

    return (
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-5">
            <GridItem
                title={gridItemTitles.virtualTours}
                isVirtualTour
                data={virtualTours}
            />
            <GridItem
                title={gridItemTitles.stills}
                showCount
                data={stills}
                archiveUrl={stillsArchiveUrl}
            />
            <GridItem
                title={gridItemTitles.floorPlans}
                showCount
                data={floorPlans}
                archiveUrl={floorArchiveUrl}
            />
        </div>
    );
};

export default Grid;