import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "../../styles/general";
import { Bg, BgForm, Form, BtnPopupClose, BtnsWrapper, BtnReset, BtnAdd } from "./filmForm.styled";
import SelectC from "../ui/Select/Select";
import { ILabel } from "../home/Home";

interface IFuncProps {
  popup(e: React.FormEvent): void;
}

interface FilmPopupProps {
  popup: IFuncProps,
  labels: ILabel
}

type Option = {
  id: number;
  type: string;
};

const _genreOptions: Option[] = [
  { id: 1, type: 'documentary'},
  { id: 2, type: 'comedy'},
  { id: 3, type: 'horror'},
  { id: 3, type: 'crime'},
];


const FilmPopup = ({popup, labels}: FilmPopupProps) => {
  const [startDate, setStartDate] = useState<Date | [Date, Date] | null>(null);

  return (
    // having issues with ts typing
    <Bg>
      <BgForm>
        <Container>
          <Form>
            <BtnPopupClose onClick={popup}>x</BtnPopupClose>
            <h2>{labels.mainTitle}</h2>

            <label htmlFor="title">
              Title
              <input id="title" placeholder={labels.title}/>
            </label>

            <label htmlFor="date">
              Release Date
              <DatePicker
                id="date"
                selected={startDate}
                placeholderText={labels.date}
                onChange={date => setStartDate(date)}
              />
            </label>

            <label htmlFor="movie-url">
              movie url
              <input id="movie-url" placeholder={labels.url}/>
            </label>

            <label htmlFor="genre">
              genre
              <SelectC
                options={_genreOptions}
              />
            </label>

            <label htmlFor="overview">
              Overview
              <input id="overview" placeholder={labels.overview}/>
            </label>

            <label htmlFor="runtime">
              Runtime
              <input id="runtime" placeholder={labels.runtime}/>
            </label>

            <BtnsWrapper>
              <BtnReset>Reset</BtnReset>
              <BtnAdd>{labels.btnSubmit}</BtnAdd>
            </BtnsWrapper>
          </Form>
        </Container>
      </BgForm>
    </Bg>
  )
}

export default FilmPopup;
