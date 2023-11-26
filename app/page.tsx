import PageContainer from "../components/PageContainer";
import Title from "../components/Title";
import Grid from "../components/Grid/Grid";
import { IData, IDataGrid } from "../utils/Interfaces";

async function getData() {
    const res = await fetch("https://giraffe360.com/gapi/share/Av7eeG1/");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Home() {
    const data: IData = await getData();
    const gridData: IDataGrid = {
        virtualTours: data["virtual_tours"],
        stills: data["stills"],
        floorPlans: data["floor_plans"],
        floorArchiveUrl: data["floor_plan_archive_download_url"],
        stillsArchiveUrl: data["stills_archive_download_url"],
    };

    return (
        <main className="max-w-screen-xl mx-auto">
            <PageContainer>
                <Title>
                    {data.name}
                </Title>
                <Grid data={gridData} />
            </PageContainer>
        </main>
    );
}
