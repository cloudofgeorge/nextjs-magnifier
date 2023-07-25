import { NextPage } from 'next';
import { Container } from '@/common/components/container';
import { Main } from '@/common/components/main';
import { getAssetsList } from '@/utils';
import { Magnifier } from '@/features/magnifier';

const Home: NextPage = async () => {
    const preloadedAssetsImages = await getAssetsList('/img/preloaded', {
        filter: ['webp', 'jpg', 'jpeg', 'png', 'gif', 'svg', 'avif'],
    });

    return (
        <Container>
            <Main className="pt-0 max-sm:px-4">
                <div className="flex justify-between items-center gap-4 flex-col xl:flex-row">
                    <h1 className="text-[10rem] uppercase max-lg:text-6xl max-lg:my-4">Magnifier</h1>
                    <div className="xl:text-right text-2xl px-8 py-5 bg-color-30 text-color-10 rounded-large max-w-lg my-2 max-xl:hidden">
                        Just put a mouse on a picture or tap on a touch screen to see the magic
                    </div>
                </div>
                <Magnifier preloadedList={preloadedAssetsImages} />
            </Main>
        </Container>
    );
};

export default Home;
