/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql'
import { LessonModule } from "./lesson/lesson.module";
import {ApolloDriverConfig, ApolloDriver} from '@nestjs/apollo' 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://127.0.0.1/school',
      synchronize: true,
      useUnifiedTopology: true,
      entities:[
        Lesson,
        Student
      ]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
    LessonModule,
    StudentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
