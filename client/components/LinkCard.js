import Link from 'next/link'

export default function LinkCard ({link}) {

    return (
        <div className="container">
        <h1>Cсылка</h1>

        <p>Ваша ссылка: <a href={link.to} target='_blank' >{link.to}</a></p>
        <p>Откуда: <a href={link.from} target='_blank' >{link.from}</a></p>
        <p>Количество кликов по ссылке: <strong>{link.clicks}</strong></p>
        <p>Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </div>
    )

}