import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";

export const ContactEmail = ({
    name = "John Doe",
    email = "example@example.com",
    message = "Hello, I have a question.",
}) => (
    <Html>
        <Head />
        <Preview>
            You have a new message from your website contact form.
        </Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={`/logoMG.png`} // Asegúrate de que esta URL sea accesible
                    width="100"
                    height="100"
                    alt="Logo"
                    style={logo}
                />
                <Text style={heading}>New Contact Message</Text>
                <Text style={text}>Name: {name}</Text>
                <Text style={text}>Email: {email}</Text>
                <Text style={text}>Message:</Text>
                <Text style={messageText}>{message}</Text>
                <Section style={btnContainer}>
                    <Button style={button} href={`mailto:${email}`}>Reply</Button>
                </Section>
                <Hr style={hr} />
                <Text style={footer}>© {new Date().getFullYear()} Your Company Name</Text>
            </Container>
        </Body>
    </Html>
);

export default ContactEmail;

const main = {
    backgroundColor: "#000000", // Fondo negro como en tu Hero
    fontFamily: "Arial, sans-serif",
    color: "#ffffff", // Texto blanco para contraste
};

const container = {
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Sutil transparencia como en tu Hero
};

const logo = {
    margin: "0 auto",
};

const heading = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#ffcc00", // Un color llamativo para el título, similar al 'secondary' de tu Hero
};

const text = {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#ffffff", // Mantén el texto blanco
};

const messageText = {
    fontSize: "14px",
    lineHeight: "20px",
    whiteSpace: "pre-wrap",
    color: "#ffffff", // Mantén el texto blanco
};

const btnContainer = {
    textAlign: "center",
};

const button = {
    backgroundColor: "#007bff", // Azul similar al de tus botones
    borderRadius: "5px",
    color: "#ffffff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "inline-block",
    padding: "10px 20px",
    marginTop: "20px",
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
    textAlign: "center",
};