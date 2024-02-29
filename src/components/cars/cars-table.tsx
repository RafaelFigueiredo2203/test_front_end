
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Pagination } from '../pagination'
import { CarsTableRow } from './cars-table-rows'


export function CarsTable() {
  return (
    <>  

      <div className="flex flex-col gap-4 mx-8 my-8">
       

        <div className="space-y-2.5">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  
                  <TableHead className="w-[287px] font-semibold">CAR</TableHead>
                  <TableHead className="hidden whitespace-nowrap w-[287px] md:font-semibold lg:table-cell">NEXT RESERVATION</TableHead>
                  <TableHead className="hidden whitespace-nowrap w-[287px] font-semibold md:table-cell">Status</TableHead>
                  <TableHead className="hidden whitespace-nowrap w-[287px] font-semibold cSm:table-cell">RATING</TableHead>
                  <TableHead className="hidden whitespace-nowrap w-[91px] font-semibold minWidth:table-cell" font-semibold>ACTIONS</TableHead>

                </TableRow>
              </TableHeader>
              <TableBody>
              {Array.from({ length: 8 }).map((_, i) => {
                  return <CarsTableRow key={i} />
                })}
               
              </TableBody>
            </Table>
            </div>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
         
       
        
      </div>
    </>
  )
}
