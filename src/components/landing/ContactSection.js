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
                    <ContactCard icon="stars" title="Excelent Services">
                    Homer has over 160+ traits that are orignal ideas from the Avalanche community! There are 6 different categories in total (skin, hat, outfit, face, mouth, and background).
                    </ContactCard>
                    <ContactCard icon="launch" title="Grow Your Market">
                    Homer will release on the 5th of October. Make sure to follow us on Twitter and join the Discord/Telegram. Homer will be tradable on the AvaPepe marketplace!
                    </ContactCard>
                    <ContactCard icon="launch" title="Launch Time">
                    Metamask selected with the Avalanche network
                    </ContactCard>
                    <ContactCard icon="launch" title="Launch Time">
                    Once 100% is minted we open our marketplace.
                    </ContactCard>
                    <ContactCard icon="launch" title="Launch Time">
                    The minting fee is 20%
                    </ContactCard>
                </div>

                <Form />
            </div>
        </section>
    );
}
