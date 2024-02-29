import { TableCell, TableRow } from '@/components/ui/table'
import Image from 'next/image'

import { Check, MoreVertical, Star } from 'lucide-react'
import carImage from '../../assets/car.png'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

export function CarsTableRow() {
  return (
    <TableRow>
      
      <TableCell className='py-2 flex flex-row items-center justify-start md:w-auto w-[207px]' >

        <div className='md:hidden absolute mb-7 flex items-center justify-center w-4 h-4 bg-green-600 rounded-full'>
          <Check size={15} className='text-center text-white '/>
        </div>

        <Image src={carImage} alt="Mini cooper" />
        <span className='hidden md:ml-2 md:text:lg md:text-gray-900 md:font-semibold lg:table-cell '>Mini Cooper 2020</span>


        <div className='lg:hidden flex flex-col items-left justify-start ml-2'>
        <span className='font-semibold text-gray-900 text-xs '>Mini Cooper 2020</span>

        <span className='text-muted-foreground text-gray-500 text-[10px]'>Next Reservation: 11/07</span>

        <div className="cSm:hidden flex items-center justify-start flex-row">
        {Array.from({ length: 5 }).map((_, i) => {
                  return  <Star size={10} className='fill-current' key={i} />
        })}

        </div>

        </div>
        
      </TableCell>
      <TableCell className="hidden whitespace-nowrap text-muted-foreground lg:table-cell">11/07</TableCell>
      <TableCell className='hidden whitespace-nowrap md:table-cell'>
        <span className='text-green-800 bg-green-100 rounded-xl font-semibold px-2 py-1'>Available</span>
      </TableCell>

      <TableCell className='hidden cSm:table-cell' > 
      <div className="flex items-center justify-start flex-row">
      {Array.from({ length: 5 }).map((_, i) => {
                  return  <Star size={15} className='fill-current' key={i} />
      })}
      </div>
      </TableCell>

      <TableCell >

      <Popover>
      <PopoverTrigger><MoreVertical size={20} className='ml-4' /></PopoverTrigger>
      <PopoverContent className='w-auto p-1'>
      <Button>
        Details
      </Button>
      </PopoverContent>
      </Popover>

      </TableCell>
      
    </TableRow>
  )
}
