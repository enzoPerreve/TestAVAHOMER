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
                We will in addition to the roadmap given 5 000 $USDT every 5% of sales 
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="25%"
                        position="NFT trade Verify"
                    />
                    <TeamCard
                        img={Image2}
                        name="50%"
                        position="5 NFT Giveaway on Discord"
                    />
                    <TeamCard
                        img={Image3}
                        name="75%"
                        position="Next Gen preview"
                    />
                    <TeamCard
                        img={Image4}
                        name="100%"
                        position="10 NFT Giveaway"
                    />
                </div>
            </div>
        </section>
    );
}
