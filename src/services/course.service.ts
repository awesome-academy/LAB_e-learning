import { AppDataSource } from '../repos/db';
import { Course } from '../entity/Course';

const courseRepository = AppDataSource.getRepository(Course);

export const getAllCourses = async () => {
  return await courseRepository.find({
    order: { name: 'ASC' },
  });
};

export const getCourseById = async (id: number) => {
  return await courseRepository.findOne({
    where: { id: id },
  });
};

export const createCourse = async (courseData: Partial<Course>) => {
  const newCourse = courseRepository.create(courseData);
  return await courseRepository.save(newCourse);
};

export const deleteCourse = async (course: Course) => {
  return await courseRepository.remove(course);
};

export const updateCourse = async (course: Course, updatedData: Partial<Course>) => {
  Object.assign(course, updatedData);
  return await courseRepository.save(course);
};
