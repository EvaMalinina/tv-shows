import React, {useCallback, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "../../styles/general";
import { Bg, BgForm, Form, BtnPopupClose } from "./addFilms.styled";
import {theme} from "../../styles/theme";
import { Select } from 'react-functional-select';

interface IFuncProps {
  popup(e: React.FormEvent): void;
}

const AddFilmPopup = ({popup}: {popup: IFuncProps}) => {
  const [startDate, setStartDate] = useState<Date | [Date, Date] | null>(null);

  return (
    // having issues with ts typing
    <Bg>
      <BgForm>
        <Container>
          <Form>
            <BtnPopupClose onClick={popup}>x</BtnPopupClose>
            <h2>Add movie</h2>
            <label htmlFor="title">
              Title
              <input id="title" placeholder="Moana"/>
            </label>

            <label htmlFor="date">
              Release Date
              <DatePicker
                id="date"
                selected={startDate}
                placeholderText='Select date'
                onChange={date => setStartDate(date)}
              />
            </label>

            <label htmlFor="movie-url">
              movie url
              <input id="movie-url" placeholder="Movie URL here"/>
            </label>

            <label htmlFor="genre">
              genre
              <Select
                options={genreOptions}
                onOptionChange={onOptionChange}
                getOptionValue={getOptionValue}
                getOptionLabel={getOptionLabel}
                themeConfig={theme}
              />
            </label>
          </Form>
        </Container>
      </BgForm>
    </Bg>
  )
}

export default AddFilmPopup;
