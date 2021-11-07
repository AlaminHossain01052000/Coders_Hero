import { LocalizationProvider, StaticDatePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const Calender = ({ date, setDate }) => {
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    displayStaticWrapperAs="desktop"
                    date={date}
                    shouldDisableDate={isWeekend}
                    onChange={(newDate) => {
                        setDate(newDate);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    );
};

export default Calender;