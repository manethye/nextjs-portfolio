import type { NextPage } from 'next'
import { Button, Flex, SectionHeading, SectionWrapper } from '../shared';
import styles from '../../styles/Work.module.scss'
import { BiChevronRight } from 'react-icons/bi';

const About: NextPage = () => {
  return (
    <div className='container' id='work'>
      <div style={{height: '500px'}}>
      <SectionWrapper topMargin={70}>
        <Flex>
          <div className={styles.col1}>
            <SectionHeading heading="My Work" />
            <p style={{marginTop: '20px', marginBottom: '30px'}}>Looking other peoples' projects can be a great way to learn and teach, share and gain experience. If you like feel free to check my Projects on Github.</p>
            <Button variant="primary">Explore <BiChevronRight fontSize={30} /></Button>
          </div>
          <div className={styles.col2}>
            <svg className="fill-current w-64" xmlns="http://www.w3.org/2000/svg" width="657.759" height="658.56"><g fill="#e0e0e0"><path data-name="Path 3" d="M488.243 494.706c20.222-19.533 40.514-38.982 60.58-58.67 3.285-3.223 9.534-5.593 8.384-10.852-1.354-6.204-8.908-5.19-13.487-7.826-7.112-4.102-11.09 1.144-15.452 5.382-14.026 13.626-28.113 27.188-42.178 40.773-24.18 23.357-48 47.086-72.693 69.876-10.488 9.684-4.387 19.52.711 25.577 6.319 7.508 10.644-3.444 14.621-7.132 20.164-18.696 39.738-38.025 59.514-57.128z"></path><path data-name="Path 4" d="M150.874 123.906c8.84 17.196 19.468 18.791 35.516 13.006 43.54-15.7 87.463-30.557 131.942-43.271 18.51-5.29 23.748-14.37 20.424-32.06-62.34 20.682-124.556 41.32-187.882 62.325z"></path><path data-name="Path 5" d="M63.097 361.278c32.417 53.433 64.494 106.37 96.664 159.26 2.147 3.534 4.222 12.086 8.774 6.826 3.77-4.352 14.774-5.798 10.603-15.735-2.315-5.525-4.321-11.28-7.388-16.373-24.438-40.565-49.706-80.642-73.362-121.651-8.224-14.26-16.594-21.555-35.291-12.327z"></path><path data-name="Path 7" d="M551.213 199.554c-18.37 3.567-22.818 12.788-20.677 30.11q8.661 70.016 13.22 140.507c1.156 18.242 8.432 25.807 26.16 26.76-6.276-66.173-12.482-131.713-18.703-197.377z"></path><path data-name="Path 8" d="M190.9 547.393c66.485 8.61 131.491 17.028 196.636 25.46-.204-18.329-8.36-25.346-26.318-27.13q-69.93-6.954-139.404-18.163c-17.272-2.774-26.629 1.414-30.915 19.833z"></path><path data-name="Path 9" d="M129.392 144.676C106.399 206.705 83.494 268.5 60.448 330.668c18.26 3.179 27.248-2.87 32.977-20.138q21.586-65.056 47.455-128.65c6.865-16.799 4.637-27.494-11.488-37.204z"></path><path data-name="Path 10" d="M445.482 451.04c-16.274 15.72-32.863 31.13-48.697 47.279-8.932 9.104-18.708 12.417-31.289 10.71q-67.21-9.138-134.55-17.313c-13.948-1.666-23.314-7.923-30.484-20.056-22.947-38.822-46.65-77.197-70.019-115.77-6.033-9.958-7.245-20.041-2.964-31.42q24.793-65.888 48.543-132.165c3.878-10.759 10.923-16.88 21.624-20.332 44.084-14.212 88.133-28.548 132-43.411 11.425-3.87 21.707-3.13 31.445 3.23 38.77 25.323 77.19 51.188 116.195 76.15 11.017 7.054 15.55 16.28 16.662 28.552 4.094 45.034 8.179 90.074 12.807 135.054 1.372 13.325-2.333 23.432-12.318 32.487-16.76 15.18-32.685 31.288-48.955 47.005zm-15.552-16.296c15.386-14.862 30.57-29.947 46.267-44.479 5.865-5.43 8.224-10.846 7.37-19.048-4.368-41.919-8.168-83.894-12.056-125.86-.956-10.317-5.694-17.148-14.797-22.861-33.013-20.723-65.812-41.84-97.859-64.008-10.68-7.383-20.713-8.359-31.87-4.719-39.317 12.827-78.46 26.18-117.816 38.875-7.258 2.339-10.802 6.37-13.316 13.338-14.26 39.553-28.97 78.94-43.544 118.374-3.583 9.684-2.523 18.007 3.31 27.282 21.387 34.026 42.056 68.52 62.244 103.274 5.125 8.822 10.886 13.264 21.157 14.466q60.971 7.119 121.742 15.854c10.68 1.552 18.242-.199 25.837-8.258 13.82-14.665 28.822-28.214 43.33-42.23z"></path><path data-name="Path 11" d="M488.243 494.706c-19.779 19.106-39.354 38.432-59.514 57.128-3.977 3.689-8.302 14.64-14.621 7.133-5.098-6.057-11.198-15.893-.711-25.577 24.695-22.792 48.516-46.523 72.693-69.876 14.064-13.586 28.152-27.148 42.177-40.774 4.362-4.236 8.34-9.483 15.452-5.382 4.578 2.639 12.137 1.62 13.488 7.826 1.147 5.258-5.103 7.632-8.385 10.853-20.059 19.682-40.357 39.136-60.579 58.669z"></path><path data-name="Path 12" d="M150.874 123.906c63.326-21.004 125.54-41.642 187.88-62.324 3.325 17.69-1.913 26.769-20.423 32.06-44.477 12.712-88.408 27.575-131.941 43.27-16.048 5.785-26.672 4.194-35.516-13.006z"></path><path data-name="Path 13" d="M63.097 361.278c18.694-9.224 27.067-1.934 35.286 12.336 23.656 41.01 48.923 81.088 73.362 121.65 3.067 5.095 5.073 10.849 7.388 16.374 4.172 9.935-6.834 11.382-10.603 15.735-4.553 5.258-6.628-3.295-8.775-6.826-32.164-52.898-64.24-105.836-96.658-159.27z"></path><path data-name="Path 15" d="M551.213 199.554c6.22 65.664 12.427 131.204 18.697 197.379-17.725-.951-25.002-8.517-26.158-26.76q-4.457-70.406-13.218-140.511c-2.14-17.32 2.31-26.54 20.68-30.108z"></path><path data-name="Path 16" d="M190.9 547.393c4.285-18.42 13.642-22.607 30.913-19.831q69.388 11.155 139.405 18.162c17.957 1.785 26.113 8.802 26.317 27.13-65.141-8.435-130.15-16.85-196.636-25.46z"></path><path data-name="Path 17" d="M129.392 144.676c16.126 9.712 18.353 20.405 11.488 37.203q-25.917 63.448-47.455 128.65c-5.73 17.27-14.717 23.318-32.977 20.14 23.046-62.169 45.953-123.966 68.944-185.993z"></path><path data-name="Path 6" d="M535.383 173.465c-55.56-36.186-110.696-72.097-165.983-108.1-9.061 17.646-3.29 26.614 11.103 35.469 39.414 24.241 78.314 49.412 116.267 75.876 14.625 10.193 25.458 10.217 38.613-3.245z"></path><path data-name="Path 14" d="M535.383 173.465c-13.153 13.458-23.99 13.436-38.612 3.245-37.951-26.462-76.856-51.634-116.267-75.877-14.395-8.853-20.165-17.823-11.103-35.47 55.286 36.005 110.422 71.916 165.982 108.102z"></path></g></svg>
          </div>
        </Flex>
      </SectionWrapper>
    </div>
    </div>
  )
};

export default About