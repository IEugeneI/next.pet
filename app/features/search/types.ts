export type searchProps = {
    onPlaceSelect: (geo: Geo) => void;
    onSearchStart: () => void;
}

type Geo = {
    lat: string | null,
    long: string | null,
    state: string | null,
    country: string | null,
}