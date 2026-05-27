export type AlarmProps = {
    state: string,
    onSelect: (props: AlertInfoProps) => void;
}


export type AlertInfoProps = {
    region: string,
    now: boolean,
    changed: string
}