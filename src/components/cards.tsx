import { CreditCard, DollarSign, LineChart, User } from "lucide-react"

const cards = [
    {
        id: 1,
        title: 'Total Revenue',
        content: '$45,231.89',
        caption: '+20.1% from last month',
        icon: DollarSign
    },
    {
        id: 2,
        title: 'Subscriptions',
        content: '+2350',
        caption: '+180.1% from last month',
        icon: User
    },
    {
        id: 3,
        title: 'Sales',
        content: '+12,234',
        caption: '+19% from last month',
        icon: CreditCard
    },
    {
        id: 4,
        title: 'Active Now',
        content: '+573',
        caption: '+201 since last hour',
        icon: LineChart
    },
]

export function Cards() {

    return (
        <div className="grid grid-cols-4 gap-2"> 
            {
                cards.map(card => {
                    return (
                        <div className="p-6 border border-zinc-400/20 rounded-lg hover:border-[#00B37E] transition-colors group hover:cursor-pointer" key={card.id}>
                            <header className="flex justify-between items-center">
                                <strong className="text-sm text-zinc-300">
                                    {card.title}
                                </strong>

                                <div className="p-1 rounded-full border border-zinc-400/20 group-hover:border-[#00B37E] transition-colors">
                                    <card.icon size={16} className="text-zinc-500 " />
                                </div>
                            </header>

                            <h2 className="my-2 text-2xl font-bold text-zinc-100">{card.content}</h2>
                            <p className="text-sm text-zinc-500 font-light">{card.caption}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}