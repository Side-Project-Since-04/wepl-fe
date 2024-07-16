import { HeadLine5 } from '@ui/src/components/HeadLine';

interface DonutProgress {
  progress: number;
  size: number;
}

export const DonutProgress = ({ progress, size }: DonutProgress) => {
  const radius = (size - 35) / 2; // 반지름
  const circumference = 2 * Math.PI * radius; // 원둘레
  const offset = circumference - (progress / 100) * circumference; // 오프셋

  return (
    <>
      <div className="flex items-center justify-center">
        <svg width={size} height={size}>
          <circle
            className="text-gray-100"
            strokeWidth="30"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className="text-primary-400"
            strokeWidth="30"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="butt"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </svg>
        <HeadLine5 className="absolute text-28 text-primary-400 font-normal">{progress}%</HeadLine5>
      </div>
      <div>
        <p>
          <svg className="h-16 w-16 rounded-5 mb-4 mr-4">
            <rect className="h-16 w-16" fill="#e2e8f0" />
          </svg>
          총 예산 금액
        </p>
        <p>
          <svg className="h-16 w-16 rounded-5 mb-4 mr-4">
            <rect className="h-16 w-16" fill="#38abb5" />
          </svg>
          총 지출 금액
        </p>
      </div>
    </>
  );
};
