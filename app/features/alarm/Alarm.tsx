"use client";

import {getAlarms} from "./api/getAlarms";
import {AlarmProps, AlertInfoProps} from "./types";
import {useEffect, useState} from "react";

export const UKRAINE_REGIONS_MAP: Record<string, string> = {
    "Vinnytsia Oblast": "Вінницька область",
    "Volyn Oblast": "Волинська область",
    "Dnipropetrovsk Oblast": "Дніпропетровська область",
    "Donetsk Oblast": "Донецька область",
    "Zhytomyr Oblast": "Житомирська область",
    "Zakarpattia Oblast": "Закарпатська область",
    "Zaporizhzhia Oblast": "Запорізька область",
    "Ivano-Frankivsk Oblast": "Івано-Франківська область",
    "Kyiv Oblast": "Київська область",
    "Kirovohrad Oblast": "Кіровоградська область",
    "Luhansk Oblast": "Луганська область",
    "Lviv Oblast": "Львівська область",
    "Mykolaiv Oblast": "Миколаївська область",
    "Odesa Oblast": "Одеська область",
    "Poltava Oblast": "Полтавська область",
    "Rivne Oblast": "Рівненська область",
    "Sumy Oblast": "Сумська область",
    "Ternopil Oblast": "Тернопільська область",
    "Kharkiv Oblast": "Харківська область",
    "Kherson Oblast": "Херсонська область",
    "Khmelnytskyi Oblast": "Хмельницька область",
    "Cherkasy Oblast": "Черкаська область",
    "Chernivtsi Oblast": "Чернівецька область",
    "Chernihiv Oblast": "Чернігівська область",
};

export default function Alarm(props: AlarmProps) {
    useEffect(() => {
        const loadAlarms = async () => {
            const alarms = await getAlarms();

            const ukrainianRegion = UKRAINE_REGIONS_MAP[props.state];

            if (!ukrainianRegion) {
                return;
            }

            const regionAlarm =
                alarms.states[ukrainianRegion];

            if (!regionAlarm) {
                return;
            }

            props.onSelect({
                region: props.state,
                now: regionAlarm.alertnow,
                changed: regionAlarm.changed
            });
        };

        loadAlarms();
    }, [props.state]);
}