export class ProductCard {
    constructor(parent) {
        this.parent = parent
    }

    getData() {
        return [
            {
                id: 1,
                header: 'Мейн - кун',
                text: `Мейн-кун — порода кошек. Вес даной пароды достигает от 8 до 12 кг.
                        Шесть у данной пароды длиная. Средняя продолжительность жизни 12 лет.
                        Идеальное животное для жизни с человеком и особенно для семей с детьми.`,
                picture: 'pictures/903c354892055f7e9ad88cbc5e00a152.jpg'
            },

            {
                id: 2,
                header: 'Сиамская кошка',
                text: `Сиамская кошка — порода кошек. Вес даной пароды достигает от 5 до 8 кг.
                Шесть у данной пароды короткая. Средняя продолжительность жизни от 12 до 20 лет.
                достаточно своенравная питомица с уникальным характером.`,
                picture: 'pictures/ce334b56019748c5c1f2b7ded2594cb0.jpg'
            },

            {
                id: 3,
                header: 'Шатланская кошка',
                text: `Шатланская кошка — порода кошек.  Вес даной пароды достигает от 3 до 6 кг.
                Шесть у данной пароды полудлинная. Средняя продолжительность жизни от 12 до 15 лет.
                В юном возрасте скоттиш-страйты, как и все котята, игривы и любознательны, но в зрелости отдают предпочтение спокойному досугу.`,
                picture: 'pictures/osobennosti-belyh-vislouhih-shotlandskih-koshek.jpg'
            }
        ]
    }

    getHTML(data) {
        return (
            `
            <div id="${data.id}" class="inline-block w-72 border-2 border-zinc-700 rounded-lg ml-3 text-bg-success">
                <img class="block border-y-0 w-56 m-auto rounded-xl mt-3" src="${data.picture}" alt="картинка">
                <div class="card-body">
                    <h5 class="pl-16 mb-1">${data.header}</h5>
                    <span class="w-64 m-auto block bg-lime-400 rounded-xl border-2
                                    border-solid border-black text-center px-2">
                        ${data.text}
                    </span>
                    <p><button id="clk-${data.id}" class="badge btn btn-warning
                                                            block w-64 h-10 m-auto mt-3
                                                            mb-2 text-base border-2 border-black"
                                onclick="openWindow(${data.id})">
                    Перейти
                    </button></p>
                </div>
            </div>
            `
        )
    }

    render() {
        const data = this.getData()

        for (let i = 0; i < data.length; i++) {
            const html = this.getHTML(data[i])
            this.parent.insertAdjacentHTML('beforeend', html)
        }
    }
}
