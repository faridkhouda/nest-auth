import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://AdminDB:AdminDB@serverlessinstance0.kc3wc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
})
export class AppModule {
  const test
}