const data = [
  {
    Title: 'Lorem ipsum dolor sit amet',
    Description:
      'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.',
    Image: 'https://source.unsplash.com/random/800x591',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Weight loss',
    Link: '#',
  },
  {
    Title: 'Cum sociis',
    Description:
      'Varius vel pharetra vel turpis nunc eget lorem. Tristique magna sit amet purus gravida quis blandit turpis cursus.',
    Image: 'https://source.unsplash.com/random/800x592',
    Format: 'Web Content',
    Industry: 'Health',
    Tag: 'Fertility services, infertility conditions, fertility assessment',
    Link: '#',
  },
  {
    Title: 'Odio morbi quis commodo',
    Description:
      'Nulla facilisi morbi tempus iaculis urna id. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat.',
    Image: 'https://source.unsplash.com/random/800x593',
    Format: 'Web Content, Blog',
    Industry: 'Cannabis',
    Tag: 'CBD, Health & Wellness, Latest News, Marijuana',
    Link: '#',
  },
  {
    Title: 'Luctus venenatis lectus',
    Description:
      'Nisl suscipit adipiscing bibendum est ultricies integer quis. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Amet nisl purus in mollis nunc sed id semper risus.',
    Image: 'https://source.unsplash.com/random/800x594',
    Format: 'Web Content, Product Descriptions',
    Industry: 'Cannabis',
    Tag:
      'Budder, Citrus, Concentrate, Crystallize, Daytime, Depression, Edibles, Energetic, Euphoric, Everest, Shatter, Extracts, Fatigue ,featured, Flower, Herbal, Hybrid, Indica',
    Link: '#',
  },
  {
    Title: 'Cum sociis',
    Description:
      'Nulla facilisi morbi tempus iaculis urna id. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat.',
    Image: 'https://source.unsplash.com/random/800x595',
    Format: 'Web Content',
    Industry: 'Medical Clinic',
    Tag: 'Clinic Management software, Medical software, CRM system',
    Link: '#',
  },
  {
    Title: 'Luctus venenatis lectus',
    Description:
      'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.',
    Image: 'https://source.unsplash.com/random/800x596',
    Format: 'Web Content, Product Descriptions',
    Industry: 'Health/Drugs',
    Tag: 'Health articles, Drugs, healthy tips',
    Link: '#',
  },
  {
    Title: 'Odio morbi quis commodo',
    Description:
      'Nisl suscipit adipiscing bibendum est ultricies integer quis. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Amet nisl purus in mollis nunc sed id semper risus.',
    Image: 'https://source.unsplash.com/random/800x597',
    Format: 'Web Content',
    Industry: 'Medical Clinic',
    Tag:
      "Addiction and Rehab, Health problems, Medications and treament, women's health issues",
    Link: '#',
  },
  {
    Title: 'Nunc vel risus',
    Description:
      'Ultrices sagittis orci a scelerisque purus semper eget. Eget egestas purus viverra accumsan in. Ac odio tempor orci dapibus ultrices.',
    Image: 'https://source.unsplash.com/random/800x598',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Benefits of yoga, types of yoga',
    Link: '#',
  },
  {
    Title: 'Et molestie ac feugiat',
    Description:
      'Duis tristique sollicitudin nibh sit amet commodo. Viverra ipsum nunc aliquet bibendum enim facilisis. Suspendisse in est ante in. Quam id leo in vitae turpis massa. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.',
    Image: 'https://source.unsplash.com/random/800x599',
    Format: 'Web Content',
    Industry: 'Health',
    Tag: 'Therapy, mental health, therapists, therapy types',
    Link: '#',
  },
  {
    Title: 'Mattis pellentesque',
    Description:
      'Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Etiam sit amet nisl purus in mollis nunc sed. Feugiat nisl pretium fusce id velit ut tortor pretium viverra.',
    Image: 'https://source.unsplash.com/random/800x600',
    Format: 'Web Content',
    Industry: 'Research',
    Tag: 'behavioral research',
    Link: '#',
  },
  {
    Title: 'Nunc vel risus',
    Description:
      'Nisl suscipit adipiscing bibendum est ultricies integer quis. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Amet nisl purus in mollis nunc sed id semper risus.',
    Image: 'https://source.unsplash.com/random/800x601',
    Format: 'Web Content',
    Industry: 'Nature',
    Tag: 'Medicinal benefits, Health ',
    Link: '#',
  },
  {
    Title: 'Et molestie ac feugiat',
    Description:
      'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.',
    Image: 'https://source.unsplash.com/random/800x602',
    Format: 'Web Content',
    Industry: 'Technical',
    Tag: 'software engineering, software design, apps development company',
    Link: '#',
  },
  {
    Title: 'Odio morbi quis commodo',
    Description:
      'Ultrices sagittis orci a scelerisque purus semper eget. Eget egestas purus viverra accumsan in. Ac odio tempor orci dapibus ultrices.',
    Image: 'https://source.unsplash.com/random/800x603',
    Format: 'Web Content',
    Industry: 'Technical',
    Tag: 'Information technology , Website development Tips',
    Link: '#',
  },
  {
    Title: 'Luctus venenatis lectus',
    Description:
      'Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Etiam sit amet nisl purus in mollis nunc sed. Feugiat nisl pretium fusce id velit ut tortor pretium viverra.',
    Image: 'https://source.unsplash.com/random/800x604',
    Format: 'Web Content',
    Industry: 'Home, Garden and Furniture',
    Tag: 'home remodeling, home restoration, home addition projects',
    Link: '#',
  },
  {
    Title: 'In tellus integer feugiat',
    Description:
      'Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Augue lacus viverra vitae congue. ',
    Image: 'https://source.unsplash.com/random/800x605',
    Format: 'Web Content',
    Industry: 'Home, Garden and Furniture',
    Tag: 'Gardening tool, gardening tips',
    Link: '#',
  },
  {
    Title: 'Maecenas sed enim ut sem',
    Description:
      'Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Nunc sed augue lacus viverra vitae congue eu consequat. Magna eget est lorem ipsum dolor sit amet consectetur.',
    Image: 'https://source.unsplash.com/random/800x606',
    Format: 'Web Content, Product Descriptions',
    Industry: 'Home, Garden and Furniture',
    Tag: 'Home Furniture',
    Link: '#',
  },
  {
    Title: 'Nunc vel risus',
    Description:
      'Nisl suscipit adipiscing bibendum est ultricies integer quis. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Amet nisl purus in mollis nunc sed id semper risus.',
    Image: 'https://source.unsplash.com/random/800x607',
    Format: 'Web Content, Product Descriptions',
    Industry: 'Home, Garden and Furniture',
    Tag: 'Home accessories',
    Link: '#',
  },
  {
    Title: 'Amazon',
    Description:
      'Nulla facilisi morbi tempus iaculis urna id. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat.',
    Image: 'https://source.unsplash.com/random/800x608',
    Format: 'Product Descriptions',
    Industry: 'Shopping and retail',
    Tag: 'Online Store',
    Link: '#',
  },
  {
    Title: 'Mattis pellentesque',
    Description:
      'Varius vel pharetra vel turpis nunc eget lorem. Tristique magna sit amet purus gravida quis blandit turpis cursus.',
    Image: 'https://source.unsplash.com/random/800x609',
    Format: 'Web Content, Product Descriptions',
    Industry: 'Shopping and retail',
    Tag: 'Online Store, Online Business',
    Link: '#',
  },
  {
    Title: 'Nunc vel risus',
    Description:
      'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.',
    Image: 'https://source.unsplash.com/random/800x610',
    Format: 'Blog',
    Industry: 'Health',
    Tag:
      'bacterial overgrowth, digestion, dogs, sibo, Small Intestinal Bacterial Overgrowth, thegut',
    Link: '#',
  },
  {
    Title: 'Luctus venenatis lectus',
    Description:
      'Duis tristique sollicitudin nibh sit amet commodo. Viverra ipsum nunc aliquet bibendum enim facilisis. Suspendisse in est ante in. Quam id leo in vitae turpis massa. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.',
    Image: 'https://source.unsplash.com/random/800x611',
    Format: 'Blog',
    Industry: 'Beauty Essentials',
    Tag:
      'Anti-Aging, cardamom soap, Face Wash, Skin Whitening, soap, whitening',
    Link: '#',
  },
  {
    Title: 'Maecenas sed enim ut sem',
    Description:
      'Varius vel pharetra vel turpis nunc eget lorem. Tristique magna sit amet purus gravida quis blandit turpis cursus.',
    Image: 'https://source.unsplash.com/random/800x612',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Health and Fitness, Medical Conditions',
    Link: '#',
  },
  {
    Title: 'Odio morbi quis commodo',
    Description:
      'Nisl suscipit adipiscing bibendum est ultricies integer quis. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Amet nisl purus in mollis nunc sed id semper risus.',
    Image: 'https://source.unsplash.com/random/800x613',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Health and Fitness',
    Link: '#',
  },
  {
    Title: 'Nunc vel risus',
    Description:
      'Varius vel pharetra vel turpis nunc eget lorem. Tristique magna sit amet purus gravida quis blandit turpis cursus.',
    Image: 'https://source.unsplash.com/random/800x614',
    Format: 'Blog',
    Industry: 'Information Technology',
    Tag: 'KPO, Information Technology, Digital Marketing',
    Link: '#',
  },
  {
    Title: 'Non tellus orci',
    Description:
      'Risus nullam eget felis eget. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Malesuada proin libero nunc consequat interdum varius.',
    Image: 'https://source.unsplash.com/random/800x615',
    Format: 'Blog',
    Industry: 'Content marketing, Health',
    Tag: 'Health Topics',
    Link: '#',
  },
  {
    Title: 'Augue eget arcu',
    Description:
      'Urna molestie at elementum eu facilisis. Dictum sit amet justo donec. Augue mauris augue neque gravida in fermentum. ',
    Image: 'https://source.unsplash.com/random/800x616',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'detoxification',
    Link: '#',
  },
  {
    Title: 'Odio morbi quis commodo',
    Description:
      'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.',
    Image: 'https://source.unsplash.com/random/800x617',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Arnica uses',
    Link: '#',
  },
  {
    Title: 'Maecenas sed enim ut sem',
    Description:
      'Duis tristique sollicitudin nibh sit amet commodo. Viverra ipsum nunc aliquet bibendum enim facilisis. Suspendisse in est ante in. Quam id leo in vitae turpis massa. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.',
    Image: 'https://source.unsplash.com/random/800x618',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Health Disorder',
    Link: '#',
  },
  {
    Title: 'Et molestie ac feugiat',
    Description:
      'Nulla facilisi morbi tempus iaculis urna id. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat.',
    Image: 'https://source.unsplash.com/random/800x619',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Health and Fitness',
    Link: '#',
  },
  {
    Title: 'Odio morbi quis commodo',
    Description:
      'Varius vel pharetra vel turpis nunc eget lorem. Tristique magna sit amet purus gravida quis blandit turpis cursus.',
    Image: 'https://source.unsplash.com/random/800x620',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'General health',
    Link: '#',
  },
  {
    Title: 'Posuere lorem ipsum',
    Description:
      'Odio facilisis mauris sit amet massa. Dui nunc mattis enim ut tellus elementum. Ac felis donec et odio. Libero volutpat sed cras ornare arcu dui vivamus arcu.',
    Image: 'https://source.unsplash.com/random/800x621',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Herbal Medication',
    Link: '#',
  },
  {
    Title: 'Aliquet nec ullamcorper ',
    Description:
      'Sem et tortor consequat id porta nibh venenatis cras. Eleifend quam adipiscing vitae proin sagittis. Proin nibh nisl condimentum id venenatis a condimentum. Nam at lectus urna duis convallis convallis.',
    Image: 'https://source.unsplash.com/random/800x622',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Influenza Booster',
    Link: '#',
  },
  {
    Title: 'Mauris a diam maecenas',
    Description:
      'Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Libero justo laoreet sit amet cursus sit amet dictum sit. Sit amet consectetur adipiscing elit.',
    Image: 'https://source.unsplash.com/random/800x623',
    Format: 'Blog',
    Industry: 'News',
    Tag: 'Carnival Activities',
    Link: '#',
  },
];

updateHTML = (data) => {
  const html = document.querySelector('#container');

  html.innerHTML = '';
  data.map((item) => {
    html.innerHTML += `
     <li
            class="item-box shadow-lg p-4 m-2 border-t-2 border-gray-800"
            data-industry="${item.Industry}"
            data-format="${item.Format}"
            data-tag="${item.Tag}"
          >
            <div class="aspect">
              <div class="aspect__inner">
                <div>
                 <img class="w-full h-72 xl:w-72 xl:h-72 object-cover"src="${item.Image}"/>
                </div>
                <h2 class="font-semibold my-2">${item.Title}</h2>
                <p>
                  ${item.Description}
                </p>
                <a
                  class="my-2 border-b border-gray-700 inline-block"
                  href="${item.Link}"
                  >Read More &rarr;</a
                >
                <h4 class="text-gray-400">
                  Industry:<span class="text-gray-700 capitalize"> ${item.Industry}</span>
                </h4>
                <h4 class="text-gray-400">
                  Format:<span class="text-gray-700 capitalize"> ${item.Format}</span>
                </h4>
                <h4 class="text-gray-400">
                  Tag:<span class="text-gray-700 capitalize"> ${item.Tag}</span>
                </h4>
              </div>
            </div>
          </li>
    
    `;
  });
};

updateHTML(data);
