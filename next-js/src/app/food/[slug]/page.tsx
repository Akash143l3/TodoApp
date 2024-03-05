"use client";
import { CaseLower, CaseUpper } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BlogContentPage() {
  const params = useParams();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchBlogById(slug: string) {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${slug}`,
        { method: 'GET' }
      );
      const data = await res.json();
      console.log('API Response:', data);
      setData(data);
      setLoading(false); // Set loading to false once data is fetched
    }

    if (params.slug) {
      console.log('Fetching data for slug:', params.slug);
      fetchBlogById(params.slug as string);
    }
  }, [params.slug]);

  console.log('Render Data:', data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data?.meals || data.meals.length === 0) {
    return <p>Error: Meal not found</p>;
  }

  return (
    <>
      <div className="w-11/12 text-sm font-normal space-y-3">
        {data.meals.map((meal: any) => (
          <div key={meal.idMeal} className='border  m-10 p-10 flex justify-between gap-5'>
            <Image
              key={meal.idMeal}
              src={meal.strMealThumb}
              alt={`Blog post - ${meal.strMeal}`}
              width={500}
              height={500}
            />
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold'>Meal Name: {meal.strMeal }</h1>
              <p><b>Steps to cook:</b><br/>{meal.strInstructions}</p>
              <div className='flex justify-between px-32'>
                <div>
                  <b>Ingredients for cooking:</b>
                  <ul>
                    {Array.from({ length: 20 }, (_, index) => index + 1).map((i) => (
                      <li key={i}>{meal[`strIngredient${i}`]}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <b>Measurement of Ingredients:</b>
                  <ul>
                    {Array.from({ length: 20 }, (_, index) => index + 1).map((i) => (
                      <li key={i}>{meal[`strMeasure${i}`]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
