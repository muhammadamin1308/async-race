import { renderPage, getTotalCount } from "@/views/garage";

let page = 1;
const limit = 7;

export async function paginatePage() {
    const prevPage = document.getElementById('prev-page')
    const nextPage = document.getElementById('next-page')

    async function fetchPage() {
        const response = await fetch(`http://localhost:3000/garage?_page=${page}&_limit=${limit}`);
        console.log(response.url)
        const data = await response.json();
        renderPage(data)
    }


    nextPage?.addEventListener('click', async () => {
        const total = await getTotalCount();
        if (page < Math.ceil(total / limit)) {
            page += 1
            await fetchPage();
        }
    })
    prevPage?.addEventListener('click', async () => {
        if (page > 1) {
            page -= 1
            await fetchPage();
        }
    })

    await fetchPage()
}

    