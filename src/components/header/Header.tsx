import React, { useState } from "react";
import { useEffect, useRef } from "react";
import axios from "axios";
import {
    Container,
    ContainerRow,
    ContainerColumn,
    ContainerSpaceBetween,
    WrapperPlaceForward
} from "../../styles/general";
import {
    HeaderC,
    InputSearchMovie,
    BtnAddMovie,
    BtnSearchMovie, HeaderPadding
} from "./header.styled";
import Title from "../ui/Title/Title";
import Logo from "../ui/Logo/Logo";
import {useDispatch, actionControlVisibility, useSelector} from "../../context/modalMovieContext";
import FilmOverview from "../filmPopups/filmOverview";
import {ILabel} from "../home/Home";

interface IMovie {
    name: string,
    desc: string,
    year: number
}

interface IPopupShowHide {
    filmOverview: boolean;
}

const labelOptionsMovieInfo: ILabel = {
    mainTitle: 'Pulp Fiction',
    title: 'Oscar winning Movie',
    date: '1994',
    overview: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles.',
    runtime: '154',
    img: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/bohemian-rhapsody-web.jpg',
    rating: 4.6
}

const Header = () => {
    const dispatch = useDispatch(),
        onAddDialogOpen = () => dispatch(
            actionControlVisibility('add', true)
        )

    const visible = useSelector(({filmOverview: visibility}: IPopupShowHide) => visibility);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [movie, setMovie] = useState<IMovie | null>({
        name: "Movie from react",
        desc: "Desc from react",
        year: 1996
    });

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const addMovie = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        axios.post(`http://localhost:9000/movie`, movie)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    const searchMovie = () => {
        console.log('search')
    }

    return (
        <HeaderC>
            {
                visible ?
                    <FilmOverview type="filmOverview" labels={labelOptionsMovieInfo}/>
                    :
                    <HeaderPadding>
                        <Container>
                            <ContainerColumn>
                                <ContainerSpaceBetween>
                                    <WrapperPlaceForward>
                                        <Logo/>
                                    </WrapperPlaceForward>
                                    <BtnAddMovie onClick={onAddDialogOpen}>+ Add Movie</BtnAddMovie>
                                </ContainerSpaceBetween>

                                <Title/>

                                <ContainerRow>
                                    <InputSearchMovie
                                        placeholder="What do you want to watch?"
                                        ref={inputRef}
                                        type="text"
                                    />
                                    <BtnSearchMovie
                                        onClick={searchMovie}
                                    >Search
                                    </BtnSearchMovie>
                                </ContainerRow>
                            </ContainerColumn>
                        </Container>
                    </HeaderPadding>
            }
        </HeaderC>
    );
};

export default Header;
