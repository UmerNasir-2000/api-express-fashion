
export default class PaginationModel<T> {
    constructor(
        public readonly count: number,
        public readonly pages: number,
        public readonly items: Array<T>
    ) {
        this.count = count ?? 0;
        this.pages = pages ?? 1;
        this.items = items ?? [];
    }
}
