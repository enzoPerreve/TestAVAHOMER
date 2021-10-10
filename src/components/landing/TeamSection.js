import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/Homer25.jpeg';
import Image2 from 'assets/img/Homer50.jpg';
import Image3 from 'assets/img/Homer75.jpg';
import Image4 from 'assets/img/Homer100.jpg';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Roadmap">
                Here is our Roadmap
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="25%"
                        position="25 000$ Giveaway Among the Owners"
                    />
                    <TeamCard
                        img={Image2}
                        name="50%"
                        position="50 000$ Giveaway Among the Owners"
                    />
                    <TeamCard
                        img={Image3}
                        name="75%"
                        position="75 000$ Giveaway Amont the Owners"
                    />
                    <TeamCard
                        img={Image4}
                        name="100%"
                        position="You can claim your reflections"
                    />
                </div>
            </div>
        </section>
    );
}
