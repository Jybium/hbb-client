

export const CancelIcon: React.FC<{
    className?: string;
  }> = ({ className = "" }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 24L24 8" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 24L8 8" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  };


export const CameraIcon: React.FC<{
    className?: string;
  }> = ({ className = "" }) => {
    return (
      <svg
      className={className}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5203 44H34.4803C40.0003 44 42.2003 40.62 42.4603 36.5L43.5003 19.98C43.7803 15.66 40.3403 12 36.0003 12C34.7803 12 33.6603 11.3 33.1003 10.22L31.6603 7.32C30.7403 5.5 28.3403 4 26.3003 4H21.7203C19.6603 4 17.2603 5.5 16.3403 7.32L14.9003 10.22C14.3403 11.3 13.2203 12 12.0003 12C7.66034 12 4.22034 15.66 4.50034 19.98L5.54034 36.5C5.78034 40.62 8.00034 44 13.5203 44Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 16H27"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24 36C27.58 36 30.5 33.08 30.5 29.5C30.5 25.92 27.58 23 24 23C20.42 23 17.5 25.92 17.5 29.5C17.5 33.08 20.42 36 24 36Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };


export const EditIcon: React.FC<{
    className?: string;
  }> = ({ className = "" }) => {
    return (
      <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.83958 2.4008L3.36624 8.19413C3.15958 8.41413 2.95958 8.84746 2.91958 9.14746L2.67291 11.3075C2.58624 12.0875 3.14624 12.6208 3.91958 12.4875L6.06624 12.1208C6.36624 12.0675 6.78624 11.8475 6.99291 11.6208L12.4662 5.82746C13.4129 4.82746 13.8396 3.68746 12.3662 2.29413C10.8996 0.914129 9.78624 1.4008 8.83958 2.4008Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.92578 3.36719C8.21245 5.20719 9.70578 6.61385 11.5591 6.80052" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    );
  };




export const PlayIcon: React.FC<{
    className?: string;
  }> = ({ className = "" }) => {
    return (
      <svg className={className} width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="34" cy="34" r="34" fill="white" />
        <path d="M24 34.5026V30.2048C24 24.6583 27.972 22.4223 32.8268 25.181L36.5929 27.3299L40.359 29.4788C45.2137 32.2375 45.2137 36.7677 40.359 39.5264L36.5929 41.6753L32.8268 43.8242C27.972 46.5829 24 44.3179 24 38.8004V34.5026Z" stroke="#E688A3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    );
  };




export const TimeIcon: React.FC<{
    className?: string;
  }> = ({ className = "" }) => {
    return (
      <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 14H12V10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.7 8.2L5.2 6.7M17.3 8.2L18.8 6.7M12 6V3M12 6C10.5166 6 9.0666 6.43987 7.83323 7.26398C6.59986 8.08809 5.63856 9.25943 5.07091 10.6299C4.50325 12.0003 4.35472 13.5083 4.64411 14.9632C4.9335 16.418 5.64781 17.7544 6.6967 18.8033C7.7456 19.8522 9.08197 20.5665 10.5368 20.8559C11.9917 21.1453 13.4997 20.9968 14.8701 20.4291C16.2406 19.8614 17.4119 18.9001 18.236 17.6668C19.0601 16.4334 19.5 14.9834 19.5 13.5C19.5 11.5109 18.7098 9.60322 17.3033 8.1967C15.8968 6.79018 13.9891 6 12 6ZM15 3H9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>


    );
  };



export const LocationIcon: React.FC<{
    className?: string;
  }> = ({ className = "" }) => {
    return (
      <svg className={className} width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33594 5.4987C8.33594 4.61464 7.98475 3.7668 7.35963 3.14168C6.73451 2.51655 5.88666 2.16536 5.0026 2.16536C4.11855 2.16536 3.2707 2.51655 2.64558 3.14168C2.02046 3.7668 1.66927 4.61464 1.66927 5.4987C1.66927 6.64937 2.77594 8.8527 5.0026 11.934C7.22927 8.8527 8.33594 6.64937 8.33594 5.4987ZM5.0026 14.1654C1.89127 10.1054 0.335938 7.2167 0.335938 5.4987C0.335937 4.26102 0.827603 3.07404 1.70277 2.19887C2.57794 1.3237 3.76493 0.832031 5.0026 0.832031C6.24028 0.832031 7.42727 1.3237 8.30244 2.19887C9.17761 3.07404 9.66927 4.26102 9.66927 5.4987C9.66927 7.2167 8.11394 10.1054 5.0026 14.1654ZM5.0026 8.16537C4.29536 8.16537 3.61708 7.88441 3.11699 7.38432C2.61689 6.88422 2.33594 6.20594 2.33594 5.4987C2.33594 4.79145 2.61689 4.11318 3.11699 3.61308C3.61708 3.11298 4.29536 2.83203 5.0026 2.83203C5.70985 2.83203 6.38813 3.11298 6.88822 3.61308C7.38832 4.11318 7.66927 4.79145 7.66927 5.4987C7.66927 6.20594 7.38832 6.88422 6.88822 7.38432C6.38813 7.88441 5.70985 8.16537 5.0026 8.16537ZM5.0026 6.83203C5.35623 6.83203 5.69536 6.69156 5.94541 6.44151C6.19546 6.19146 6.33594 5.85232 6.33594 5.4987C6.33594 5.14508 6.19546 4.80594 5.94541 4.55589C5.69536 4.30584 5.35623 4.16536 5.0026 4.16536C4.64898 4.16536 4.30984 4.30584 4.0598 4.55589C3.80975 4.80594 3.66927 5.14508 3.66927 5.4987C3.66927 5.85232 3.80975 6.19146 4.0598 6.44151C4.30984 6.69156 4.64898 6.83203 5.0026 6.83203Z" fill="#FDF3F6" />
      </svg>


    );
  };
