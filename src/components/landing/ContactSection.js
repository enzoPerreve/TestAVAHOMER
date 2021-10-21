import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';

export default function ContactSection() {
    return (
        <section className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <Title heading="FAQ">
                </Title>

                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard icon="stars" title="About us">
                    Homer has over 160+ traits that are orignal ideas from the Avalanche community! There are 6 different categories in total (skin, hat, outfit, face, mouth, and background).
                    </ContactCard>
                    <ContactCard icon="launch" title="Launch Time">
                    Homer will release soon. Make sure to follow us on Twitter and join the Discord/Telegram. Homer will be tradable on the AvaPepe marketplace!
                    </ContactCard>
                    <ContactCard icon="launch" title="Avalanche">
                    Why Avalanche ? Avalanche is one of the cheapest but also the fastest Blockchain our team loves working on this blockchain also due to its strong community
                    </ContactCard>
                    <ContactCard icon="launch" title="Marketplace">
                    Only one thing can be revealed the owners will have 4% of relfections on sales on the marketplace whether it is on our site or another ! More information will come soon !
                    </ContactCard>
                    <ContactCard icon="launch" title="Price">
                    The price is 2 $AVAX ! Why $ 2 AVAX? it is simple thanks to the reflection of 20% the holders who arrive the earliest will benefit from the mint of the others and will reimburse their nft very quickly!
                    </ContactCard>
                </div>

                <Form />
            </div>
        </section>
    );
}
