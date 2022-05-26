import './styles/global.scss';
import Container from './components/container/Container';
import Card from './components/card/Card';
import { indonesianText, englishText, spanishText} from './constant/text';
import { createContext, useEffect, useState} from 'react';

export const LanguageContext = createContext();
const App = () =>{
    const [language, setLanguage] = useState("indonesian");
    const [text, setText] = useState(indonesianText);

    useEffect(()=>{
        //useEffect ini digunakan untuk mendetect perubahan language. bila ada perubahan language lakukan pula perubahan
        //state text.
        if(language === "indonesian"){
            setText(indonesianText);
        }else if(language === "english"){
            setText(englishText);
        }else if(language === "spanish"){
            setText(spanishText);
        }
        // TODO: answer here
    }, [language])

    return(
        <LanguageContext.Provider value={{
            text: text,
            setLanguage: setLanguage
        }}>
            <Container>
                <Card/>
            </Container>
        </LanguageContext.Provider>
    )
}

export default App;