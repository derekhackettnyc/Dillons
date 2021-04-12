import React, { useState, useEffect } from 'react';

const CountDown = ({ message, deadline }) => {

    const [days, setDays] = useState('-')
    const [hours, setHours] = useState('-')
    const [minutes, setMinutes] = useState('-')
    const [seconds, setSeconds] = useState('-')


    useEffect(() => {
        const interval = setInterval(() => getCountDownEvent(deadline), 1000)
        return function cleanup() {
            clearInterval(interval)
        }
    }, [deadline]);


    const getCountDownEvent = (deadline) => {

        const time = Date.parse(deadline) - Date.parse(new Date())

        if (time > 0) {

            const seconds = Math.floor((time / 1000) % 60)
            const minutes = Math.floor((time / 1000 / 60) % 60)
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
            const days = Math.floor(time / (1000 * 60 * 60 * 24))

            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)


        } else
            console.log("Event Has Passed")
    }


    return (
        <div delay={500}>
            <div className='countdown'>
                <div className='countdown__top'>
                    {message}
                </div>
                <div className='countdown__bottom'>
                    <div className='countdown__item'>
                        <div className='countdown__time'>
                            {days}
                        </div>
                        <div className='countdown__tag'>
                            Days
                        </div>
                    </div>
                    <div className='countdown__item'>
                        <div className='countdown__time'>
                            {hours}
                        </div>
                        <div className='countdown__tag'>
                            Hours
                        </div>
                    </div>
                    <div className='countdown__item'>
                        <div className='countdown__time'>
                            {minutes}
                        </div>
                        <div className='countdown__tag'>
                            Mins
                        </div>
                    </div>
                    <div className='countdown__item'>
                        <div className='countdown__time'>
                            {seconds}
                        </div>
                        <div className='countdown__tag'>
                            Secs
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CountDown