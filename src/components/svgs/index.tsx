

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
      <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="34" cy="34" r="34" fill="white" />
        <path d="M24 34.5026V30.2048C24 24.6583 27.972 22.4223 32.8268 25.181L36.5929 27.3299L40.359 29.4788C45.2137 32.2375 45.2137 36.7677 40.359 39.5264L36.5929 41.6753L32.8268 43.8242C27.972 46.5829 24 44.3179 24 38.8004V34.5026Z" stroke="#E688A3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    );
  };
