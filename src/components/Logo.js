const Logo = ({ setActiveNavItem, filterCurrentBooks }) => {
    const toReadCategoryHandler = (e) => {
        e.preventDefault();
        setActiveNavItem('isToRead');
        filterCurrentBooks('isToRead');
    };

    return (
        <div className="logo">
            <a className="logo__link" onClick={(e) => toReadCategoryHandler(e)}>
                <svg
                    className="logo__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="120"
                    viewBox="0 0 766 581"
                    width="120"
                    version="1.1"
                >
                    <path d="m75.077 578.41c-1.692-1.42-3.077-3.21-3.077-3.96 0-0.75745-0.63324-2.8549-1.4072-4.6611-1.9969-4.6602-4.2515-13.968-5.64-23.284-0.65578-4.4-1.572-10.475-2.036-13.5-0.46404-3.025-1.4957-10.225-2.2926-16-3.045-22.067-3.7634-26.694-5.1241-33-1.2314-5.7067-2.2714-11.869-3.1222-18.5-1.3386-10.433-3.4444-23.929-4.3687-28-1.0611-4.6741-3.1506-15.469-4.5484-23.5-0.33508-1.925-0.85453-4.175-1.1543-5-0.68216-1.8772-0.88343-3.3778-2.6825-20-0.80364-7.425-2.3603-18.675-3.4592-25s-2.7838-16.9-3.7442-23.5-2.1722-13.125-2.6928-14.5c-0.52066-1.375-1.1374-5.2-1.3706-8.5-0.23318-3.3-1.1368-10.275-2.0081-15.5-0.87126-5.225-1.9661-12.875-2.4329-17-1.3364-11.808-3.5973-27.456-4.725-32.702-0.56732-2.639-1.5464-9.5232-2.1758-15.298-0.62938-5.775-1.555-12.075-2.0568-14-0.76539-2.9357-1.7746-9.0096-3.4062-20.5-0.1562-1.1-0.58952-4.7-0.96294-8-0.9626-8.52-3.5074-24.29-4.6789-29.01-0.8883-3.58-2.7109-15.09-4.8036-30.35-0.77167-5.63 1.4583-12.24 5.5312-16.4 1.8769-1.92 11.283-2.36 18.888-0.88 4.977 0.96 6.474 0.51 6.474-1.95 0-1.06 0.647-1.92 1.439-1.92 0.93852 0 1.6733-1.5645 2.1135-4.5 0.37115-2.475 1.0436-4.5 1.4944-4.5 0.45076 0 0.78163-1.3344 0.73526-2.9654-0.096-3.362 1.698-6.04 4.04-6.04 1.227 0 1.311-0.267 0.378-1.2-2.5764-2.5764-0.87232-7.3164 3.4598-9.6236 1.4339-0.76368 1.9919-1.7925 1.6601-3.0611-0.703-2.688 1.379-6.115 3.715-6.115 1.308 0 1.965-0.679 1.965-2.031 0-1.1173 0.675-2.2904 1.5-2.607 0.825-0.31658 1.5-1.1316 1.5-1.8111 0-2.7632 6.5665-5.0645 9.3141-3.2642 3.9856 2.6115 4.9306 0.34388 2.6067-6.255-2.2922-6.5088-2.2464-5.5629-0.36011-7.4492 1.4143-1.4143 1.9266-1.3741 5.4602 0.42857 2.1447 1.0941 5.6048 2.0001 7.6892 2.0132 2.0844 0.01312 5.5898 0.46329 7.7898 1.0004 15.745 3.8438 59.311 0.61967 87-6.4386 3.3-0.8412 8.925-2.2286 12.5-3.0832 3.575-0.85454 8.075-1.9825 10-2.5065 3.4945-0.95134 25.821-3.6936 31.5-3.8689 28.924-0.8932 57.147 2.5468 81 9.8728 20.908 6.4216 37.555 13.717 43.327 18.989 1.8132 1.6561 3.6064 3.0123 3.985 3.0139 0.37855 0.0016 1.5883 1.3465 2.6883 2.9887 3.4861 5.2044 6.695 3.9685 23.674-9.1183 3.11-2.406 7.14-5.274 8.94-6.374 3.54-2.158 5.7-3.519 10.38-6.523 7.89-5.068 44.49-20.977 48.26-20.977 0.54627 0 3.6367-1.1733 6.8676-2.6073 12.26-5.442 57.8-17.49 84.37-22.321 48.409-8.8016 82.795-9.0499 128.5-0.92812 6.05 1.0751 12.988 2.2701 15.418 2.6555 6.9779 1.1069 7.7452 3.0178 12.528 31.201 0.79343 4.675 1.9434 10.975 2.5556 14 2.4194 11.956 3.1853 16.724 3.5341 22 0.37069 5.6068 1.1217 10.41 4.5341 29 1.0601 5.775 2.3975 13.875 2.9721 18 3.0915 22.193 4.0815 28.89 6.4308 43.5 1.415 8.8 3.2533 20.05 4.085 25 0.83171 4.95 1.78 11.925 2.1072 15.5 0.32724 3.575 1.003 7.016 1.5016 7.6467 0.49864 0.6307 1.3259 4.9057 1.8383 9.5 1.3342 11.963 3.6372 28.138 4.3297 30.41 0.32564 1.0686 1.0748 5.9929 1.6647 10.943 0.58996 4.95 1.4933 11.475 2.0074 14.5 0.51411 3.025 1.6634 10.45 2.5541 16.5 0.89062 6.05 1.8898 11.675 2.2205 12.5 0.33066 0.825 0.67762 2.85 0.77102 4.5s1.1611 8.4 2.3726 15 2.8588 16.05 3.6605 21c0.80174 4.95 1.8658 11.25 2.3647 14 0.49883 2.75 1.4363 9.05 2.0832 14 3.1634 24.205 4.0364 30.46 5.0235 36 0.58802 3.3 1.2563 7.8 1.4851 10 0.75956 7.3044 0.95205 8.3283 1.7078 9.0837 1.359 1.3584 0.78497 8.2385-0.82143 9.8449-1.867 1.867-1.9843 1.8796-4.58 0.49041-2.374-1.2705-3.5822-0.51499-2.0898 1.3068 1.4283 1.7436 5.8992 27.697 6.77 39.3 0.20748 2.7644 1.5234 11.232 2.9242 18.817 3.1342 16.97 3.2515 15.263-1.203 17.496-3.3442 1.6765-7.2673 1.9526-36.25 2.5511-17.875 0.36913-38.8 0.87409-46.5 1.1221-26.882 0.86592-80.422 1.4437-135.8 1.4655l-55.78 0.02-2.2045 2.3727c-1.2125 1.305-3.3296 4.0119-4.7046 6.0152-11.175 16.282-93.854 25.544-108 12.099-1.925-1.8296-4.175-3.4525-5-3.6063-2.2341-0.4166-13.819 1.0999-16.663 2.1813-1.3621 0.51786-5.9326 1.3863-10.157 1.9299-4.2241 0.5436-12.63 1.6671-18.68 2.4967-6.05 0.82958-14.304 1.9418-18.342 2.4716-4.0379 0.5298-8.0879 1.1885-9 1.4637-0.91205 0.27524-7.0583 1.1771-13.658 2.0041-6.6 0.827-25.95 3.5782-43 6.1139-17.05 2.5356-35.275 5.2132-40.5 5.9502-5.225 0.73695-12.474 1.8263-16.109 2.4207-8.1855 1.3385-49.382 6.4622-68.891 8.568-7.975 0.86086-17.512 2.0049-21.193 2.5422-10.554 1.5407-13.298 1.2763-16.731-1.6118zm17.231-23.77c0.45075-1.1746-2.4601-21.646-5.2811-37.141-0.50066-2.75-1.8192-9.95-2.9302-16-1.112-6.05-2.228-12.58-2.482-14.5s-1.85-12.28-3.546-23c-1.697-10.72-3.273-21.08-3.503-23-0.231-1.92-3.652-22.85-7.605-46.5-3.952-23.65-7.763-46.82-8.469-51.5-2.47-16.35-4.62-29.73-9.56-59.5-4.522-27.25-8.213-51.34-10.957-71.5-1.74-12.79-7.023-48.07-8.536-57-0.80749-4.7685-1.314-13-1.1539-18.75 0.30802-11.057-1.1476-14.307-2.6636-5.9464-0.26563 1.4649-0.67448 3.0084-0.90855 3.4299-0.23407 0.42158-0.0018 4.3665 0.51622 8.7665 0.9913 8.4205 1.5461 13.397 2.2299 20 0.22782 2.2 1.3558 8.95 2.5067 15 2.2036 11.584 3.0345 17.175 5.5729 37.5 0.85865 6.875 2.2176 15.875 3.0198 20 1.7917 9.2124 6.1071 36.516 6.9543 44 0.34246 3.025 1.7521 11.125 3.1325 18s3.1243 16.325 3.8753 21c0.75099 4.675 2.0723 12.1 2.9361 16.5 0.86388 4.4 2.0099 11.6 2.5467 16 1.0648 8.7275 3.1162 22 7.8051 50.5 4.5137 27.434 6.0704 38.089 7.6709 52.5 0.7941 7.15 1.9033 14.8 2.4648 17 0.56155 2.2 1.6952 7.6 2.5192 12 1.7269 9.2209 2.8014 14.789 5.0286 26.058 0.87592 4.4318 1.2982 8.8251 0.93836 9.7627-0.35982 0.93767-0.17181 2.2861 0.41779 2.9966 1.177 1.42 4.152 22.24 4.152 29.06 0 5.2513 1.9585 7.772 3.3074 4.2568zm5.63-4.39c-2.0142-12.13-4.1116-30.079-3.7184-31.82 0.56398-2.4976 1.806 2.2844 4.75 18.288 2.9403 15.984 4.6259 16.633 28.03 10.801 3.025-0.7538 9.1-1.6588 13.5-2.0112 4.4-0.35235 10.25-1.2812 13-2.064 2.75-0.78285 9.8682-2.0733 15.818-2.8677 5.95-0.79437 11.464-1.9799 12.252-2.6346 0.82026-0.68077 2.7008-0.93698 4.393-0.59854 1.6273 0.32546 3.197 0.20621 3.4882-0.26501 0.29123-0.47121 1.9962-1.1065 3.7888-1.4117 8.5369-1.4536 12.437-2.3938 14.444-3.4817 1.2013-0.65137 5.0263-1.186 8.5-1.1881 6.7087-0.004 15.027-1.2454 36.816-5.4944 46.906-9.1469 96.28-9.055 124.14 0.23115l10.642 3.5468 2.2596-2.1052c1.9354-1.8031 2.0668-2.3375 0.91588-3.7243-2.2003-2.6512-9.6804-7.4492-11.639-7.4657-2.3681-0.0199-4.9624-1.6755-4.052-2.5858 1.3096-1.3096 10.652 2.479 16.176 6.5598 6.3221 4.6704 8.3878 4.9504 12.218 1.6559 3.83-3.3-1.58-8.61-8.79-8.61-1.03 0-1.88-0.68-1.88-1.5 0-2.5602 6.1456-1.7935 11.171 1.3937l4.5629 2.8937 3.3414-2.8518c4.0952-3.4952 4.3381-3.2579-7.6658-7.4924-9.73-3.43-13.47-5.44-10.14-5.44 0.91437 0 4.0419 0.85024 6.95 1.8894 12.903 4.6107 17.788 5.7987 17.788 4.3262 0-2.6838-17.827-9.2045-37-13.534-6.325-1.4282-13.975-2.9534-17-3.3893-3.1093-0.44808-5.2827-1.2273-5-1.7926 0.79781-1.5956 3.4406-1.2616 20.966 2.6496 23.062 5.1467 30.185 7.382 37.751 11.846 5.247 3.0958 9.465-0.31569 4.6231-3.7391-6.3423-4.4843-28.279-10.943-43.34-12.76-3.025-0.36498-9.1897-1.2867-13.699-2.0483-22.779-3.847-80.632-2.0376-128.3 4.0129-6.325 0.8028-15.1 1.9212-19.5 2.4853-30.939 3.9666-52.359 3.5215-76.202-1.5836-10.179-2.1795-9.3913 0.50926-16.804-57.363-0.88061-6.875-2.0404-14.75-2.5772-17.5-1.02-5.2248-6.4126-40.936-7.9972-52.958-0.50438-3.8271-1.1254-7.6521-1.3801-8.5-0.25465-0.8479-0.93173-5.1416-1.5046-9.5416-0.57289-4.4-1.6839-12.05-2.4688-17-0.78496-4.95-2.3547-15.3-3.4883-23s-2.9832-20.075-4.1101-27.5-2.7281-18-3.5582-23.5c-4.498-29.8-10.443-67.03-12.933-81-0.785-4.4-2.578-15.42-3.985-24.5s-3.194-20.32-3.97-25c-1.952-11.75-3.273-20.55-5.1-34-2.019-14.859-2.154-15.352-4.613-16.887-2.846-1.778-3.742-0.08-2.755 5.221 0.427 2.291 1.511 9.791 2.409 16.666 1.6356 12.521 2.7592 20.239 6.4788 44.5 6.324 41.249 8.5954 55.586 10.931 69 1.0535 6.05 2.2107 13.25 2.5717 16 0.36098 2.75 2.0052 13.306 3.6539 23.459 3.0323 18.672 3.6442 29.095 1.2061 20.541-0.62709-2.2-2.0907-10.75-3.2525-19s-2.7729-19.05-3.5803-24c-0.809-4.95-2.831-17.55-4.496-28-1.664-10.45-3.425-21.02-3.913-23.5-0.835-4.24-1.854-10.54-5.575-34.5-0.855-5.5-2.189-14.05-2.966-19-0.776-4.95-2.119-14.18-2.982-20.5-3.461-25.338-3.793-27.148-4.805-26.136-0.664 0.664-0.602 3.446 0.187 8.317 0.651 4.025 1.58 10.694 2.063 14.819 0.48327 4.125 1.5485 11.775 2.3671 17 3.1473 20.087 4.0215 29.844 2.8053 31.309-1.1936 1.4382-0.40707 8.3668 3.3139 29.191 10.244 57.328 10.56 59.5 8.6527 59.5-1.0867 0-1.0021 0.43229-6.5544-33.5-2.5199-15.4-5.2548-31.6-6.0776-36-0.82279-4.4-1.6744-10.25-1.8924-13-0.21802-2.75-0.63361-5.675-0.92352-6.5s-1.7264-9.15-3.1922-18.5c-6.89-43.95-6.643-42.751-8.442-40.933-0.566 0.571-0.393 4.618 0.445 10.433 0.75338 5.225 2.0783 14.45 2.9442 20.5 3.0173 21.081 4.6826 32.033 5.626 37 0.52236 2.75 1.3979 8.5201 1.9456 12.822 1.914 15.03 0.411 14.79-1.973-0.32-0.651-4.12-1.789-10.65-2.53-14.5-1.997-10.37-4.278-23.72-5.981-35-3.538-23.424-3.769-24.5-5.262-24.5-1.6397 0-1.5693 1.1642 1.1789 19.5 3.3432 22.306 6.8201 47.299 8.0685 58 0.70578 6.05 1.604 11.788 1.996 12.75 0.41995 1.0311 0.26582 1.75-0.37518 1.75-1.4207 0-1.2954 0.63533-8.0893-41-1.1218-6.875-2.7155-16.55-3.5414-21.5-0.82595-4.95-1.7783-10.885-2.1164-13.188-0.33808-2.3036-1.2366-4.4269-1.9968-4.7186-1.6828-0.64575-1.7549 1.2299-0.3274 8.5204 1.5711 8.0243 3.6044 26.409 3.0911 27.949-0.54856 1.6457-2.7673-6.6515-3.6973-13.826-0.37521-2.8948-1.136-5.5437-1.6907-5.8865-0.64125-0.39631-0.80045 0.60986-0.4372 2.7632 0.3142 1.8626 1.2417 7.4365 2.061 12.386 0.81937 4.95 1.949 11.475 2.5104 14.5 2.0669 11.138 5.1861 29.696 6.1349 36.5 0.93964 6.7385 3.6365 23.239 6.5378 40 0.76162 4.4 2.0572 12.5 2.8791 18 0.82189 5.5 1.7786 11.408 2.126 13.129 0.73563 3.6437-1.2126 5.6797-2.0689 2.1622-0.54997-2.2591-3.098-16.716-6.0436-34.291-0.82966-4.95-1.9952-10.503-2.59-12.34-0.59484-1.8367-1.6631-7.9117-2.374-13.5-0.711-5.59-2.219-15.56-3.352-22.16-2.28-13.28-7.975-47.88-8.847-53.75-0.307-2.06-0.978-3.75-1.493-3.75-0.51464 0-0.69723 0.7875-0.40574 1.75 0.4546 1.5011 2.33 15.54 4.1746 31.25 0.77156 6.5713-1.9763 0.56156-2.9761-6.5087-1.3159-9.3063-2.9671-16.379-3.7161-15.916-0.85311 0.52725-0.70844 1.6373 3.3133 25.424 1.6273 9.625 3.3499 20.435 3.8279 24.022 0.47802 3.5872 1.1123 7.1872 1.4095 8 0.29722 0.81277 1.0046 5.3028 1.572 9.9778 0.56738 4.675 1.66 11.875 2.4281 16s1.0515 7.8619 0.62973 8.3043c-0.42174 0.44235-1.0638-1.3576-1.4269-4-0.363-2.64-1.355-8.18-2.205-12.3-0.85019-4.125-1.9323-10.2-2.4046-13.5-0.47235-3.3-1.3453-7.572-1.9399-9.4934-0.59459-1.9214-1.1156-4.8464-1.1579-6.5-0.043-1.66-0.703-4.81-1.467-7.01l-1.389-4 0.49233 4c0.27078 2.2 0.89447 6.7 1.386 10 0.49152 3.3 1.7922 12.075 2.8905 19.5s2.4575 15.525 3.0204 18c0.56297 2.475 1.773 9.675 2.689 16 0.91598 6.325 2.0499 13.3 2.5199 15.5 0.46994 2.2 1.7835 10.3 2.919 18s2.4882 16.475 3.0061 19.5c1.4515 8.4788 4.7994 30 7.078 45.5 1.132 7.7 2.6855 17.825 3.4523 22.5 0.76676 4.675 2.552 15.925 3.9672 25s2.9732 18.075 3.4623 20c0.48904 1.925 1.1687 5.975 1.5103 9 0.34163 3.025 1.7037 12.025 3.0268 20s3.1213 19.225 3.996 25c0.87472 5.775 2.2324 14.1 3.017 18.5 1.6985 9.5246 4.1705 24.699 8.9596 55 0.78236 4.95 1.7138 11.7 2.0699 15 0.98982 9.1729 3.1901 16.5 4.9549 16.5 0.13257 0-0.11388-2.1375-0.54768-4.75zm5.2177-4c-0.50294-0.9625-1.6756-8.05-2.6059-15.75-0.93033-7.7-2.3814-17.517-3.2246-21.816-0.84321-4.2986-1.3107-9.2486-1.039-11 0.40846-2.6322-6.5859-61.502-8.9327-75.184-0.60174-3.5083-0.49872-3.8458 0.83813-2.7454 0.9095 0.74863 1.7767 3.7734 2.1503 7.5 0.34437 3.435 1.3256 10.745 2.1805 16.245s2.4662 15.85 3.5806 23 2.4513 16.825 2.9707 21.5c0.51948 4.675 1.3701 11.2 1.8904 14.5 2.5992 16.488 4.0514 26.538 4.5878 31.75l0.59171 5.75h8.3996c4.6198 0 11.675-0.65259 15.678-1.4502 4.0031-0.79761 11.1-2.2089 15.77-3.1362 4.6706-0.92726 10.071-2.303 12-3.0571l3.508-1.3711-3.5 0.54497c-1.925 0.29973-6.65 1.0802-10.5 1.7343-11.134 1.8916-35.976 1.392-37.3-0.7501-0.69845-1.1301-1.5181-6.0091-3.6985-22.015-2.3584-17.313-4.3233-30.157-6.3116-41.26-1.0106-5.6428-1.6167-10.48-1.347-10.75 1.187-1.19 2.147-0.27 2.147 2.07 0 1.4035 0.88702 7.141 1.9712 12.75 1.0841 5.609 3.1468 18.298 4.5836 28.198 3.98 27.423 4.0172 27.617 5.4494 28.503 3.1771 1.9635 22.211 2.2823 32.922 0.55136 14.271-2.3064 16.687-2.8204 30.574-6.5038 6.6-1.7506 16.5-4.0469 22-5.103s12.025-2.3423 14.5-2.8582c5.1268-1.0688 7.1096-0.0769 5.3741 2.6885-0.67476 1.0752-2.9209 1.9447-5.9775 2.3138-5.3399 0.64483-27.171 6.3459-39.897 10.419-4.4 1.4082-11.69 3.2854-16.2 4.1716-6.8196 1.34-8.2502 1.9521-8.5 3.6373-0.24917 1.6808-1.9197 2.404-9.8004 4.2427-21.503 5.017-33.157 5.9161-34.844 2.6884zm19.34-2.33c6.05-0.66543 11.808-1.6224 12.797-2.1267 0.98809-0.50424 3.6881-1.3284 6-1.8316 3.733-0.8124 3.4988-0.86281-2.0926-0.45042-3.4628 0.2554-7.2105 0.95372-8.328 1.5518-1.1176 0.59811-7.3926 1.1653-13.945 1.2605-8.3633 0.12149-11.915 0.52364-11.922 1.3497-0.01 1.2432 2.4763 2.0859 4.9906 1.6917 0.825-0.12935 6.45-0.77963 12.5-1.4451zm43.231-13.616c-0.97297-0.25354-2.323-0.23687-3 0.0371-0.67703 0.27393 0.11903 0.48137 1.769 0.46099 1.65-0.0204 2.2039-0.2445 1.231-0.49804zm-38.73-5.4c-15.604-0.89161-14.469 0.0873-15.843-13.665-0.65-6.46-1.62-14.66-2.17-18.24-0.54778-3.575-1.4692-10.55-2.0477-15.5-1.016-8.6948-1.8377-15.497-4.0462-33.5-0.57351-4.675-1.2306-9.625-1.4603-11-0.22965-1.375-0.83118-6.1-1.3367-10.5-0.50555-4.4-1.1826-9.8-1.5045-12-1.2318-8.4179-4.7592-34.33-5.6492-41.5-0.51207-4.125-1.1063-8.4-1.3206-9.5-0.54326-2.7894-1.7826-12.067-2.1169-15.848-0.1533-1.7335-1.0214-8.3269-1.9292-14.652-2.51-17.489-4.7036-38.207-4.1084-38.802 1.0258-1.0258 1.643 0.63082 2.5848 6.9374 3.941 26.4 5.944 41.26 5.944 44.12 0 1.8377 0.50566 3.8469 1.1237 4.465 0.61802 0.61802 2.6273 10.271 4.4651 21.45s4.0522 23.926 4.9209 28.326c0.86873 4.4 2.0212 11.375 2.561 15.5 0.53985 4.125 1.2274 8.175 1.5278 9 0.30043 0.825 1.1909 6.45 1.9788 12.5 1.8457 14.172 4.0823 27.934 5.3635 33 1.3922 5.5054 1.3818 10.223-0.0193 8.8215-0.59315-0.59315-1.7102-5.8882-2.4822-11.767-0.77207-5.8786-1.5867-10.996-1.8102-11.372-0.22356-0.37581-0.71478-3.3675-1.0916-6.6482s-0.8286-6.2057-1.004-6.5c-0.17536-0.29429-0.59591-2.5601-0.93456-5.0351s-1.5289-9.45-2.645-15.5-2.9969-16.821-4.1796-23.936c-4.1981-25.255-2.7823-10.168 3.1508 33.574 3.3094 24.399 6.2172 46.387 6.4617 48.862 1.6702 16.905 4.8042 40.861 5.5857 42.696 1.3632 3.2008 5.847 3.804 28.277 3.804 17.994 0 23.517 0.62008 17.5 1.9646-3.7242 0.83212-22.555 1.0751-33.75 0.4354zm-30.311-149.65c-0.25153-0.9625-0.45732-0.175-0.45732 1.75s0.2058 2.7125 0.45732 1.75c0.25153-0.9625 0.25153-2.5375 0-3.5zm28.811 142.8c-7.9882-2.1311-10.5-4.5515-10.5-10.118 0-3.2971 1.6239-2.1334 2.8818 2.0651 1.122 3.7449 1.4382 4 4.9583 4 2.0679 0 4.2584 0.49856 4.8678 1.1079 0.73101 0.73101 7.945 1.1371 21.206 1.1936 14.112 0.0602 19.784 0.40039 19.044 1.1421-1.2687 1.2715-38.001 1.7988-42.459 0.60945zm31-5.2894c-38.294-1.3102-37.385-0.96193-39.152-15.001-1.1887-9.4441-0.24309-14.163 1.4306-7.1402 0.5082 2.1325 1.5535 6.5623 2.3228 9.844 1.561 6.6587 1.8097 6.8024 13.899 8.031 3.025 0.30742 6.4073 0.75335 7.5162 0.99096 1.1089 0.2376 10.221 0.53291 20.25 0.65624s18.234 0.53606 18.234 0.91718c0 2.0878-4.3596 2.3906-24.5 1.7015zm2-4.9c-3.3-0.45591-9.825-1.3564-14.5-2.001-4.675-0.64464-10.263-1.307-12.419-1.472-6.3354-0.48482-7.1586-2.0976-10.038-19.665-1.1454-6.9891-0.39803-12.163 0.94143-6.5167 0.86949 3.6651 2.5114 11.971 3.1708 16.041 0.35815 2.2102 1.1695 3.75 1.976 3.75 0.75258 0 1.3683 0.45 1.3683 1s0.92958 1 2.0657 1c1.1362 0 2.9016 0.44733 3.9232 0.99407 2.7356 1.464 28.426 5.0008 36.344 5.0036 5.0208 0.002 6.7231 0.33392 6.4178 1.2524-0.50095 1.5069-10.482 1.8251-19.251 0.6137zm-1-5.9511c-10.045-1.2341-25.641-3.9667-28.115-4.9263-1.6193-0.62801-2.2437-1.9526-2.6651-5.6532-0.30265-2.6582-1.2642-8.658-2.1368-13.333-0.87258-4.675-3.4043-21.076-5.626-36.447s-4.542-28.552-5.1561-29.292c-0.74436-0.89689-0.7832-1.6787-0.11654-2.3453 2.5017-2.5017 4.5769 7.0913 9.36 43.268 0.486 3.6758 1.1381 7.7258 1.4491 9 0.31101 1.2742 1.2224 6.3667 2.0254 11.317 2.7457 16.926 3.1558 18.542 5.0762 19.995 1.5374 1.1636 3.888 1.771 5.6545 1.4611 0.1375-0.0241 2.1364 0.62171 4.442 1.4352 6.8556 2.4188 30.731 4.9246 40.146 4.2134 6.4854-0.48992 8.2444-0.34936 7.9182 0.63273-0.51284 1.5442-21.591 1.9854-32.256 0.67515zm0-5.4738c-4.4-0.79818-10.025-1.9651-12.5-2.5932s-5.4044-1.2174-6.5098-1.3097c-2.8228-0.23547-6.1246-2.2347-5.2067-3.1526 0.42175-0.42174 2.3107-0.20854 4.1976 0.47379 15.09 5.4567 59.604 6.9725 73.887 2.516 1.2652-0.39476 1.7273-0.15991 1.4315 0.72757-1.2085 3.6255-40.606 6.0037-55.3 3.3381zm58.121-3.1513c-0.82096-0.82096 20.702-4.162 27.296-4.2371 7.4014-0.0844 4.2593 0.71-11.385 2.8783-17.571 2.4353-15.049 2.22-15.911 1.3588zm-104.6-104.36c-0.0545-2.017-2.3279-12.968-3.2245-15.533-1.3193-3.7738-0.20248-9.8879 1.3119-7.1819 1.4428 2.5782 3.687 20.508 2.7514 21.983-0.45295 0.71405-0.83044 1.0434-0.83886 0.73194zm305.98 127.35c-1.0832-1.6885-1.1128-1.6858-0.56728 0.0504 0.31653 1.0075 0.62771 2.5825 0.69151 3.5 0.10451 1.5029 0.16073 1.4979 0.56727-0.0504 0.2482-0.94522-0.063-2.5202-0.6915-3.5zm6.517-1.2174c-0.76-5.45-2.52-6.94-2.52-2.13 0 3.3738 1.7771 8.6213 2.6306 7.7678 0.31607-0.31606 0.26125-2.8535-0.12181-5.6387zm9.0152-3.7178c-0.95281-7.6261-1.6821-6.1514-0.85781 1.7346 0.36851 3.5257 0.8673 5.8186 1.1084 5.0952 0.24112-0.72336 0.12835-3.7968-0.25061-6.8298zm12.84 4.91c-0.94-3.93-1.38-4.06-1.38-0.42 0 1.75 0.46 3.17 1.02 3.17 0.60496 0 0.75097-1.1175 0.35933-2.75zm25.428-1.0959c1.4815-1.5652 4.6735-3.6136 7.0934-4.5518 2.4198-0.93826 8.2569-3.7076 12.971-6.1541 4.7143-2.4465 9.0624-4.4482 9.6624-4.4482 0.60008 0 2.9538-0.9 5.2306-2 4.4858-2.1673 6.2361-2.4864 6.2361-1.1369 0 0.47471-2.475 1.6416-5.5 2.5931-3.025 0.95148-5.5 2.1381-5.5 2.6369 0 1.3279 0.6534 1.225 15.724-2.4752 18.964-4.656 45.165-9.4956 54.776-10.118 51.024-3.3034 71.829-3.3162 99.5-0.0609 1.925 0.22646 9.8 1.1469 17.5 2.0455 14.377 1.6777 29.662 4.2296 42 7.012 12.894 2.9078 12.5 2.8683 12.5 1.2515 0-3.1097-31.865-13.127-55-17.289-8.241-1.4828-10.656-2.5921-10.483-4.8146 0.2001-2.5683 2.7724-2.6699 14.914-0.58872 6.1426 1.0529 8.0216 1.0872 8.3333 0.15201 0.63845-1.9154 5.1876-1.433 17.382 1.8429 23.508 6.3154 23.854 6.3905 23.854 5.1713 0-0.4281-2.7487-1.5944-6.1083-2.5917-7.1248-2.1151-6.9601-4.3455 0.19913-2.6952 11.257 2.5948 8.2481-0.31611-4.3502-4.2089-27.188-8.401-32.318-9.7209-51.005-13.123-10.126-1.8437-11.389-4.0428-1.8047-3.1433 6.9006 0.64762 37.458 7.8468 46.569 10.972 15.486 5.3111 17.286 5.4724 16.703 1.4972-0.53697-3.6586-2.3549-4.5306-13.624-6.5346-4.3567-0.77476-9.5317-1.8122-11.5-2.3054-1.9683-0.49325-7.4038-1.4132-12.079-2.0444-4.675-0.63115-12.775-1.8352-18-2.6756-5.225-0.84041-14.225-1.7443-20-2.0087-12.244-0.56051-13.163-0.77012-12.376-2.8216 0.69502-1.8112 5.9595-2.0224 14.316-0.57435 3.0581 0.52993 9.1602 1.4777 13.56 2.1062 35.467 5.066 44.974 6.6891 52.76 9.0079 7.1461 2.1282 9.344 1.6609 8.0498-1.7117-1.0354-2.6981-27.861-9.9296-45.742-12.331-4.3626-0.58589-8.15-1.2834-8.4167-1.55-2.9616-2.9616 16.296-0.59202 36.424 4.4817 17.784 4.483 19.225 4.7031 17.545 2.6786-1.1998-1.4457-9.5722-3.988-25.37-7.7039-9.7823-2.3009-13.46-4.2469-5.5-2.9105 15.897 2.6691 22.25 4.0948 33.5 7.518 3.2914 1.0015 2.8471-1.3665-0.5-2.665-4.9017-1.9016-23.649-6.1754-39.25-8.9478-6.4689-1.1496-14.332-1.6818-27.309-1.8484-8.8911-0.11417-7.9316-2.0345 1.118-2.2376 6.1236-0.13746 6.3094-0.20106 2.191-0.75-9.4306-1.257-52.643 1.6595-74 4.9944-21.698 3.3882-26.037 4.1445-31 5.4038-3.025 0.76754-9.325 2.3214-14 3.453-14.859 3.5969-34.044 8.826-39.867 10.867-3.098 1.0856-10.133 3.4029-15.633 5.1495-14.618 4.6422-35.396 11.923-40 14.016-16.823 7.6483-22.054 10.309-28.336 14.41-7.4372 4.8548-8.0457 5.6298-5.8511 7.4512 0.98778 0.81977 2.5342 0.26946 6.25-2.2241 5.7147-3.835 13.993-8.1952 23.937-12.608 3.85-1.7083 8.9669-4.0056 11.371-5.1051 2.404-1.0995 4.517-1.8529 4.6956-1.6743 1.0356 1.0356-2.3697 3.0574-13.067 7.7582-12.119 5.3259-29.432 14.875-29.476 16.259-0.0744 2.3374 11.627-2.4702 17.766-7.2995 1.3638-1.0728 3.2065-1.9429 4.0948-1.9336 0.91058 0.009 0.0884 0.94218-1.8849 2.1381-5.879 3.5631-12.459 8.1839-13.235 9.2936-2.6132 3.74 1.3938 3.3032 7.6312-0.83197 5.3289-3.5329 26.609-14.592 28.192-14.65 0.50149-0.0187 2.7118-0.90339 4.9118-1.9661s4.4274-1.9474 4.9497-1.9661c0.52232-0.0187 4.5723-1.3555 9-2.9708 17.47-6.3732 26.217-8.2646 25.727-5.5632-0.16094 0.88738-5.0491 2.4452-17.531 5.587-2.1203 0.53368-5.2703 1.7026-7 2.5975-1.7297 0.89496-6.97 2.8787-11.645 4.4082-18.394 6.0181-40 16.702-40 19.779 0 1.2442 7.1898 3.4334 7.8734 2.3973 1.0352-1.569 14.38-9.269 16.063-9.2689 0.85973 0.00008-1.9244 2.2346-6.1869 4.9657-8.24 5.29-9.86 8.04-4.74 8.04 1.65 0 3 0.45 3 1 0 2.0448 4.2026 0.9051 6.8064-1.8459zm3.19-7.14c0-0.54386 3.6-2.7989 8-5.0112 5.1293-2.5789 8-3.5587 8-2.7304 0 0.71054-3.3824 2.9656-7.5165 5.0112-8.26 4.09-8.48 4.16-8.48 2.73zm282.66-2.2802c-0.27393-0.67703-0.48137 0.11903-0.46099 1.769 0.0204 1.65 0.2445 2.2039 0.49804 1.231 0.25354-0.97297 0.23687-2.323-0.0371-3zm-257.16-2.56c-0.62-0.62-4.5 0.93-4.5 1.8 0 0.46119 1.0922 0.32309 2.4272-0.3069 1.3349-0.62999 2.2688-1.3037 2.0754-1.4972zm255.56-10.051c-0.58478-1.0927-1.0701-4.1538-1.0785-6.8024-0.0156-4.9144-1.29-8.3438-2.6101-7.0237-0.65278 0.65278 1.8423 13.842 3.35 17.708 0.49068 1.2583 0.65077 1.2264 0.99342-0.19759 0.22466-0.93368-0.07-2.5916-0.65476-3.6843zm-329.48-9.95c-0.88-5.32-3.42-20.69-5.66-34.17-2.2306-13.475-5.1547-31.468-6.4979-39.984s-3.1268-18.866-3.9636-23c-0.83-4.14-2.37-12.7-3.41-19.02-3.63-22.07-26.19-161.62-28.61-177-1.3427-8.525-2.6994-16.175-3.015-17-0.31555-0.825-1.187-6-1.9365-11.5-0.74952-5.5-2.263-15.175-3.3633-21.5s-2.951-18.7-4.1127-27.5c-4.2364-32.092-3.6488-29.866-9.2465-35.023-10-9.213-30.27-19.125-49.77-24.338-4.125-1.1029-9.975-2.6909-13-3.5288-27.252-7.5488-71.632-6.7532-104.5 1.8733-41.89 10.995-81.02 13.361-113.51 6.862-3.685-0.737-3.66-1.807-0.432 18.813 1.406 8.987 3.187 20.839 3.956 26.339 0.76948 5.5 1.8391 12.7 2.3769 16 0.53781 3.3 1.8957 11.85 3.0174 19 4.7031 29.977 9.0961 57.36 10.027 62.5 0.54768 3.025 2.1495 13.375 3.5595 23 1.4101 9.625 2.7714 18.179 3.0252 19.008 0.2538 0.82949 1.1191 6.0045 1.9229 11.5s1.9454 12.692 2.5368 15.992c1.6974 9.4704 4.9991 31.928 6.5425 44.5 0.77647 6.325 1.6617 12.518 1.9672 13.763 0.30548 1.2446 1.701 10.245 3.1011 20 3.76 26.198 5.2212 35.783 6.8963 45.237 0.82832 4.675 1.9676 12.775 2.5317 18 0.56411 5.225 1.4557 11.75 1.9814 14.5 0.52565 2.75 1.4095 8.6 1.964 13 0.55457 4.4 1.9146 14.287 3.0223 21.971 1.1077 7.6842 2.014 15.222 2.014 16.75 0 6.1286 7.1551 8.5598 31.858 10.825 18.889 1.732 34.635 0.57868 88.142-6.4558 12.355-1.6242 27.071-2.9118 52.5-4.5932 36.854-2.4368 95.686 5.5763 114.43 15.586 5.6996 3.0437 5.8195 2.7013 3.6496-10.416zm316.42 10.33c0-0.825-0.65973-1.5-1.4661-1.5-0.80634 0-2.9438-0.62859-4.75-1.3969-3.128-1.3306-12.709-4.1092-23.063-6.6886-2.6283-0.65478-5.0658-0.90341-5.4167-0.55252s0.11811 0.63799 1.0422 0.63799c0.92413 0 2.4616 0.39106 3.4167 0.86901 3.3734 1.6883 21.193 7.1314 23.449 7.1628 1.258 0.0175 3.1608 0.6925 4.2284 1.5 2.41 1.83 2.56 1.82 2.56-0.03zm-301.81-4.1229c8.5468-5.4783 19.239-10.58 34.308-16.368 6.05-2.324 11.9-4.6186 13-5.0991 1.8461-0.80643 17.695-6.2251 32-10.94 10.217-3.3678 37.688-10.921 44-12.098 3.3-0.61517 6.9-1.4801 8-1.922 1.1-0.44195 5.15-1.3249 9-1.962 3.85-0.63718 8.3949-1.5827 10.1-2.1012 18.337-5.5762 87.831-9.2214 114.4-6.0007 4.675 0.56671 12.993 1.3137 18.484 1.66 5.4911 0.34632 13.591 1.2645 18 2.0405 15.633 2.7512 15.426 2.8917 13.079-8.8786-1.683-8.4424-3.8591-21.803-6.0604-37.208-1.889-13.22-5.6251-36.696-8.9917-56.5-1.3557-7.975-3.1347-19.675-3.9533-26-2.2693-17.533-3.547-26.079-4.5997-30.764-0.53-2.35-0.96-5.76-0.96-7.59 0-1.8254-0.44624-5.7564-0.99165-8.7356-1.56-8.5214-4.8268-29.632-5.9448-38.417-0.55998-4.4-1.6691-12.05-2.4647-17-0.79559-4.95-2.1472-13.725-3.0036-19.5s-2.0197-12.75-2.5851-15.5c-1.0238-4.9795-4.064-24.365-7.998-51-3.46-23.43-4.12-27.709-5.52-35.5-3.54-19.804-5.5-31.139-6.57-38-0.65-4.125-2.13-12.45-3.3-18.5l-2.12-11-8.06-3.216c-17.93-7.1584-73.74-11.273-102.44-7.5527-11.499 1.4904-22.61 3.0667-26 3.6889-1.375 0.25232-7.9 1.4089-14.5 2.5701-23.76 4.1804-82.936 20.815-92.189 25.915-2.3745 1.3087-7.6104 3.4316-13.811 5.5996-14.454 5.0539-51.155 27.951-63.333 39.513-2.8023 2.6605-2.7213 5.9378 0.67948 27.482 1.2154 7.7 2.9158 18.95 3.7785 25 0.86278 6.05 2.6097 17.525 3.882 25.5s2.5949 17.2 2.9392 20.5c0.34425 3.3 1.2881 8.475 2.0975 11.5 0.80938 3.025 7.2931 41.95 14.408 86.5 7.1152 44.55 14.072 87.75 15.459 96 1.3874 8.25 3.0162 18.15 3.6196 22 0.96662 6.1684 2.51 14.53 5.9063 32 0.53464 2.75 1.9046 11.3 3.0443 19s2.5052 16.25 3.0344 19c0.52921 2.75 1.4428 9.275 2.0302 14.5 1.5989 14.223 0.59946 13.496 10.146 7.3771zm308.81-45.26c0-3.6183-7.698-5.399-35-8.0964-26.251-2.5935-23.064-1.1795 11.272 5.0014 2.6246 0.47246 6.2246 1.3129 8 1.8676 3.7344 1.1668 11.43 2.81 13.978 2.9849 1.0879 0.0747 1.75-0.59024 1.75-1.7575zm-715.28-289.87c-0.22912-1.5125-0.41659-0.275-0.41659 2.75s0.18747 4.2625 0.41659 2.75 0.22912-3.9875 0-5.5zm32.971-20.01c-0.25029-0.95609-0.446 0.0617-0.4349 2.2617s0.21588 2.9822 0.45508 1.7383c0.23919-1.2439 0.23011-3.0439-0.02018-4zm-3-19c-0.25029-0.95609-0.446 0.0617-0.4349 2.2617s0.21588 2.9822 0.45508 1.7383c0.23919-1.2439 0.23011-3.0439-0.02018-4z" />
                </svg>
            </a>
        </div>
    );
};

export default Logo;
