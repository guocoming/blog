import { parseISO, format } from 'date-fns'
import { zhCN } from 'date-fns/locale'


const Date = ({ dateString }) => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>{format(date, 'yyyy-MM-dd', { locale: zhCN })}</time>
  )
}

export default Date