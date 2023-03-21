import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll() {
    return {
      message: 'Aca estaran nuestros productos',
    };
  }

  @Get(':id')
  selectProduct(@Param('id') id: number) {
    return {
      messge: 'Aqui se filtrara por producto en expecifico',
      id,
    };
  }

  @Post()
  craete(@Body() payload: any) {
    return {
      message: 'Metodo crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return {
      message: 'Metodo Actualizar',
      body,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
      message: 'Metodo delete',
    };
  }
}
