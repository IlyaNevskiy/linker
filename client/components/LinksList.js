import Link from 'next/link'

export default function LinksList ({links}){
   if(!links.length){
       return <p className="center"> Ссылок пока нет </p>
   }
   
    return (
        <table>
        <thead>
          <tr>
              <th>№</th>
              <th>Оригинальная</th>
              <th>Сокращенная</th>
              <th>Открыть</th>
          </tr>
        </thead>

        <tbody>
            {links.map((link, index) => {
            return(<tr key={link._id}>
                <td>{index + 1}</td>
                <td>{link.from}</td>
                <td>{link.to}</td>
                <td><Link href={'/detail/[id]'} as={`/detail/${link._id}`}><a>Открыть</a></Link></td>
            </tr>) 
            })}
        </tbody>
      </table>
    )
}