import React from 'react';

class ContactUs extends React.Component {
    render(){
    return (
        <div>
        <div className="row" style={{margin:"0",padding:"0"}}>
            <div className="col-12 col-md-6 my-5">
                <svg width="80%" height="200px" viewBox="0 0 771 242" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.744 4.608L40.416 49.728V72H24V49.728L0.672 4.608H19.296L32.352 32.832L45.312 4.608H63.744ZM94.7423 72.768C89.4943 72.768 84.7583 71.648 80.5343 69.408C76.3743 67.168 73.0783 63.968 70.6463 59.808C68.2783 55.648 67.0943 50.784 67.0943 45.216C67.0943 39.712 68.3103 34.88 70.7422 30.72C73.1743 26.496 76.5023 23.264 80.7263 21.024C84.9503 18.784 89.6863 17.664 94.9343 17.664C100.182 17.664 104.918 18.784 109.142 21.024C113.366 23.264 116.694 26.496 119.126 30.72C121.558 34.88 122.774 39.712 122.774 45.216C122.774 50.72 121.526 55.584 119.03 59.808C116.598 63.968 113.238 67.168 108.95 69.408C104.726 71.648 99.9903 72.768 94.7423 72.768ZM94.7423 58.56C97.8783 58.56 100.534 57.408 102.71 55.104C104.95 52.8 106.07 49.504 106.07 45.216C106.07 40.928 104.982 37.632 102.806 35.328C100.694 33.024 98.0703 31.872 94.9343 31.872C91.7343 31.872 89.0783 33.024 86.9663 35.328C84.8543 37.568 83.7983 40.864 83.7983 45.216C83.7983 49.504 84.8223 52.8 86.8703 55.104C88.9823 57.408 91.6063 58.56 94.7423 58.56ZM184.379 18.432V72H167.963V64.704C166.299 67.072 164.027 68.992 161.147 70.464C158.331 71.872 155.195 72.576 151.739 72.576C147.643 72.576 144.027 71.68 140.891 69.888C137.755 68.032 135.323 65.376 133.595 61.92C131.867 58.464 131.003 54.4 131.003 49.728V18.432H147.323V47.52C147.323 51.104 148.251 53.888 150.107 55.872C151.963 57.856 154.459 58.848 157.595 58.848C160.795 58.848 163.323 57.856 165.179 55.872C167.035 53.888 167.963 51.104 167.963 47.52V18.432H184.379ZM213.251 45.216C213.251 39.648 214.371 34.784 216.611 30.624C218.915 26.464 222.083 23.264 226.115 21.024C230.211 18.784 234.883 17.664 240.131 17.664C246.851 17.664 252.451 19.424 256.931 22.944C261.475 26.464 264.451 31.424 265.859 37.824H248.387C246.915 33.728 244.067 31.68 239.843 31.68C236.835 31.68 234.435 32.864 232.643 35.232C230.851 37.536 229.955 40.864 229.955 45.216C229.955 49.568 230.851 52.928 232.643 55.296C234.435 57.6 236.835 58.752 239.843 58.752C244.067 58.752 246.915 56.704 248.387 52.608H265.859C264.451 58.88 261.475 63.808 256.931 67.392C252.387 70.976 246.787 72.768 240.131 72.768C234.883 72.768 230.211 71.648 226.115 69.408C222.083 67.168 218.915 63.968 216.611 59.808C214.371 55.648 213.251 50.784 213.251 45.216ZM271.376 45.12C271.376 39.616 272.4 34.784 274.448 30.624C276.56 26.464 279.408 23.264 282.992 21.024C286.576 18.784 290.576 17.664 294.992 17.664C298.768 17.664 302.064 18.432 304.88 19.968C307.76 21.504 309.968 23.52 311.504 26.016V18.432H327.92V72H311.504V64.416C309.904 66.912 307.664 68.928 304.784 70.464C301.968 72 298.672 72.768 294.896 72.768C290.544 72.768 286.576 71.648 282.992 69.408C279.408 67.104 276.56 63.872 274.448 59.712C272.4 55.488 271.376 50.624 271.376 45.12ZM311.504 45.216C311.504 41.12 310.352 37.888 308.048 35.52C305.808 33.152 303.056 31.968 299.792 31.968C296.528 31.968 293.744 33.152 291.44 35.52C289.2 37.824 288.08 41.024 288.08 45.12C288.08 49.216 289.2 52.48 291.44 54.912C293.744 57.28 296.528 58.464 299.792 58.464C303.056 58.464 305.808 57.28 308.048 54.912C310.352 52.544 311.504 49.312 311.504 45.216ZM372.436 17.856C378.708 17.856 383.7 19.904 387.412 24C391.188 28.032 393.076 33.6 393.076 40.704V72H376.756V42.912C376.756 39.328 375.828 36.544 373.972 34.56C372.116 32.576 369.62 31.584 366.484 31.584C363.348 31.584 360.852 32.576 358.996 34.56C357.14 36.544 356.212 39.328 356.212 42.912V72H339.796V18.432H356.212V25.536C357.876 23.168 360.116 21.312 362.932 19.968C365.748 18.56 368.916 17.856 372.436 17.856ZM421.563 45.12C421.563 39.616 422.587 34.784 424.635 30.624C426.747 26.464 429.595 23.264 433.179 21.024C436.763 18.784 440.763 17.664 445.179 17.664C448.955 17.664 452.251 18.432 455.067 19.968C457.947 21.504 460.155 23.52 461.691 26.016V18.432H478.107V72H461.691V64.416C460.091 66.912 457.851 68.928 454.971 70.464C452.155 72 448.859 72.768 445.083 72.768C440.731 72.768 436.763 71.648 433.179 69.408C429.595 67.104 426.747 63.872 424.635 59.712C422.587 55.488 421.563 50.624 421.563 45.12ZM461.691 45.216C461.691 41.12 460.539 37.888 458.235 35.52C455.995 33.152 453.243 31.968 449.979 31.968C446.715 31.968 443.931 33.152 441.627 35.52C439.387 37.824 438.267 41.024 438.267 45.12C438.267 49.216 439.387 52.48 441.627 54.912C443.931 57.28 446.715 58.464 449.979 58.464C453.243 58.464 455.995 57.28 458.235 54.912C460.539 52.544 461.691 49.312 461.691 45.216ZM506.399 0.959999V72H489.983V0.959999H506.399ZM595.192 18.432L580.696 72H562.552L554.104 37.248L545.368 72H527.32L512.728 18.432H529.144L536.728 56.736L545.752 18.432H563.128L572.248 56.544L579.736 18.432H595.192ZM598.188 45.12C598.188 39.616 599.212 34.784 601.26 30.624C603.372 26.464 606.22 23.264 609.804 21.024C613.388 18.784 617.388 17.664 621.804 17.664C625.58 17.664 628.876 18.432 631.692 19.968C634.572 21.504 636.78 23.52 638.316 26.016V18.432H654.732V72H638.316V64.416C636.716 66.912 634.476 68.928 631.596 70.464C628.78 72 625.484 72.768 621.708 72.768C617.356 72.768 613.388 71.648 609.804 69.408C606.22 67.104 603.372 63.872 601.26 59.712C599.212 55.488 598.188 50.624 598.188 45.12ZM638.316 45.216C638.316 41.12 637.164 37.888 634.86 35.52C632.62 33.152 629.868 31.968 626.604 31.968C623.34 31.968 620.556 33.152 618.252 35.52C616.012 37.824 614.892 41.024 614.892 45.12C614.892 49.216 616.012 52.48 618.252 54.912C620.556 57.28 623.34 58.464 626.604 58.464C629.868 58.464 632.62 57.28 634.86 54.912C637.164 52.544 638.316 49.312 638.316 45.216ZM721.328 18.432L687.728 97.44H670.064L682.352 70.176L660.56 18.432H678.896L691.28 51.936L703.568 18.432H721.328ZM749.057 72.768C744.385 72.768 740.225 71.968 736.577 70.368C732.929 68.768 730.049 66.592 727.937 63.84C725.825 61.024 724.641 57.888 724.385 54.432H740.609C740.801 56.288 741.665 57.792 743.201 58.944C744.737 60.096 746.625 60.672 748.865 60.672C750.913 60.672 752.481 60.288 753.569 59.52C754.721 58.688 755.297 57.632 755.297 56.352C755.297 54.816 754.497 53.696 752.897 52.992C751.297 52.224 748.705 51.392 745.121 50.496C741.281 49.6 738.081 48.672 735.521 47.712C732.961 46.688 730.753 45.12 728.897 43.008C727.041 40.832 726.113 37.92 726.113 34.272C726.113 31.2 726.945 28.416 728.609 25.92C730.337 23.36 732.833 21.344 736.097 19.872C739.425 18.4 743.361 17.664 747.905 17.664C754.625 17.664 759.905 19.328 763.745 22.656C767.649 25.984 769.889 30.4 770.465 35.904H755.297C755.041 34.048 754.209 32.576 752.801 31.488C751.457 30.4 749.665 29.856 747.425 29.856C745.505 29.856 744.033 30.24 743.009 31.008C741.985 31.712 741.473 32.704 741.473 33.984C741.473 35.52 742.273 36.672 743.873 37.44C745.537 38.208 748.097 38.976 751.553 39.744C755.521 40.768 758.753 41.792 761.249 42.816C763.745 43.776 765.921 45.376 767.777 47.616C769.697 49.792 770.689 52.736 770.753 56.448C770.753 59.584 769.857 62.4 768.065 64.896C766.337 67.328 763.809 69.248 760.481 70.656C757.217 72.064 753.409 72.768 749.057 72.768ZM2.688 189.216C2.688 183.648 3.808 178.784 6.048 174.624C8.352 170.464 11.52 167.264 15.552 165.024C19.648 162.784 24.32 161.664 29.568 161.664C36.288 161.664 41.888 163.424 46.368 166.944C50.912 170.464 53.888 175.424 55.296 181.824H37.824C36.352 177.728 33.504 175.68 29.28 175.68C26.272 175.68 23.872 176.864 22.08 179.232C20.288 181.536 19.392 184.864 19.392 189.216C19.392 193.568 20.288 196.928 22.08 199.296C23.872 201.6 26.272 202.752 29.28 202.752C33.504 202.752 36.352 200.704 37.824 196.608H55.296C53.888 202.88 50.912 207.808 46.368 211.392C41.824 214.976 36.224 216.768 29.568 216.768C24.32 216.768 19.648 215.648 15.552 213.408C11.52 211.168 8.352 207.968 6.048 203.808C3.808 199.648 2.688 194.784 2.688 189.216ZM60.813 189.12C60.813 183.616 61.837 178.784 63.885 174.624C65.997 170.464 68.845 167.264 72.429 165.024C76.013 162.784 80.013 161.664 84.429 161.664C88.205 161.664 91.501 162.432 94.317 163.968C97.197 165.504 99.405 167.52 100.941 170.016V162.432H117.357V216H100.941V208.416C99.341 210.912 97.101 212.928 94.221 214.464C91.405 216 88.109 216.768 84.333 216.768C79.981 216.768 76.013 215.648 72.429 213.408C68.845 211.104 65.997 207.872 63.885 203.712C61.837 199.488 60.813 194.624 60.813 189.12ZM100.941 189.216C100.941 185.12 99.789 181.888 97.485 179.52C95.245 177.152 92.493 175.968 89.229 175.968C85.965 175.968 83.181 177.152 80.877 179.52C78.637 181.824 77.517 185.024 77.517 189.12C77.517 193.216 78.637 196.48 80.877 198.912C83.181 201.28 85.965 202.464 89.229 202.464C92.493 202.464 95.245 201.28 97.485 198.912C99.789 196.544 100.941 193.312 100.941 189.216ZM145.649 144.96V216H129.233V144.96H145.649ZM173.962 144.96V216H157.546V144.96H173.962ZM274.554 161.856C281.21 161.856 286.49 163.872 290.394 167.904C294.362 171.936 296.346 177.536 296.346 184.704V216H280.026V186.912C280.026 183.456 279.098 180.8 277.242 178.944C275.45 177.024 272.954 176.064 269.754 176.064C266.554 176.064 264.026 177.024 262.17 178.944C260.378 180.8 259.482 183.456 259.482 186.912V216H243.162V186.912C243.162 183.456 242.234 180.8 240.378 178.944C238.586 177.024 236.09 176.064 232.89 176.064C229.69 176.064 227.162 177.024 225.306 178.944C223.514 180.8 222.618 183.456 222.618 186.912V216H206.202V162.432H222.618V169.152C224.282 166.912 226.458 165.152 229.146 163.872C231.834 162.528 234.874 161.856 238.266 161.856C242.298 161.856 245.882 162.72 249.018 164.448C252.218 166.176 254.714 168.64 256.506 171.84C258.362 168.896 260.89 166.496 264.09 164.64C267.29 162.784 270.778 161.856 274.554 161.856ZM358.323 188.352C358.323 189.888 358.227 191.488 358.035 193.152H320.883C321.139 196.48 322.195 199.04 324.051 200.832C325.971 202.56 328.307 203.424 331.059 203.424C335.155 203.424 338.003 201.696 339.603 198.24H357.075C356.179 201.76 354.547 204.928 352.179 207.744C349.875 210.56 346.963 212.768 343.443 214.368C339.923 215.968 335.987 216.768 331.635 216.768C326.387 216.768 321.715 215.648 317.619 213.408C313.523 211.168 310.323 207.968 308.019 203.808C305.715 199.648 304.563 194.784 304.563 189.216C304.563 183.648 305.683 178.784 307.923 174.624C310.227 170.464 313.427 167.264 317.523 165.024C321.619 162.784 326.323 161.664 331.635 161.664C336.819 161.664 341.427 162.752 345.459 164.928C349.491 167.104 352.627 170.208 354.867 174.24C357.171 178.272 358.323 182.976 358.323 188.352ZM341.523 184.032C341.523 181.216 340.563 178.976 338.643 177.312C336.723 175.648 334.323 174.816 331.443 174.816C328.691 174.816 326.355 175.616 324.435 177.216C322.579 178.816 321.427 181.088 320.979 184.032H341.523ZM440.223 162.432V216H423.807V208.704C422.143 211.072 419.871 212.992 416.991 214.464C414.175 215.872 411.039 216.576 407.583 216.576C403.487 216.576 399.871 215.68 396.735 213.888C393.599 212.032 391.167 209.376 389.439 205.92C387.711 202.464 386.847 198.4 386.847 193.728V162.432H403.167V191.52C403.167 195.104 404.095 197.888 405.951 199.872C407.807 201.856 410.303 202.848 413.439 202.848C416.639 202.848 419.167 201.856 421.023 199.872C422.879 197.888 423.807 195.104 423.807 191.52V162.432H440.223ZM468.431 170.016C470.031 167.52 472.239 165.504 475.055 163.968C477.871 162.432 481.167 161.664 484.943 161.664C489.359 161.664 493.359 162.784 496.943 165.024C500.527 167.264 503.343 170.464 505.391 174.624C507.503 178.784 508.559 183.616 508.559 189.12C508.559 194.624 507.503 199.488 505.391 203.712C503.343 207.872 500.527 211.104 496.943 213.408C493.359 215.648 489.359 216.768 484.943 216.768C481.231 216.768 477.935 216 475.055 214.464C472.239 212.928 470.031 210.944 468.431 208.512V241.536H452.015V162.432H468.431V170.016ZM491.855 189.12C491.855 185.024 490.703 181.824 488.399 179.52C486.159 177.152 483.375 175.968 480.047 175.968C476.783 175.968 473.999 177.152 471.695 179.52C469.455 181.888 468.335 185.12 468.335 189.216C468.335 193.312 469.455 196.544 471.695 198.912C473.999 201.28 476.783 202.464 480.047 202.464C483.311 202.464 486.095 201.28 488.399 198.912C490.703 196.48 491.855 193.216 491.855 189.12ZM524.851 216.768C521.971 216.768 519.603 215.936 517.747 214.272C515.955 212.544 515.059 210.432 515.059 207.936C515.059 205.376 515.955 203.232 517.747 201.504C519.603 199.776 521.971 198.912 524.851 198.912C527.667 198.912 529.971 199.776 531.763 201.504C533.619 203.232 534.547 205.376 534.547 207.936C534.547 210.432 533.619 212.544 531.763 214.272C529.971 215.936 527.667 216.768 524.851 216.768Z" fill="black"/></svg>
                <br/><a href="tel:+917004009454" className="font-weight-bold text-dark px-1 my-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z"/></svg>  Call me</a>
            </div>
            <img className="col-12 col-md-6 py-5" src="https://media.giphy.com/media/xT8qBu5gOYEqHhgDQs/giphy.gif" alt=""/>
        </div>
        <div className="row">
            <div className="col-12 col-md-6 my-5">
            <svg width="80%" height="200px" viewBox="0 0 820 222" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.688 30.92C46.472 28.68 44.712 26.984 42.408 25.832C40.168 24.616 37.512 24.008 34.44 24.008C29.128 24.008 24.872 25.768 21.672 29.288C18.472 32.744 16.872 37.384 16.872 43.208C16.872 49.416 18.536 54.28 21.864 57.8C25.256 61.256 29.896 62.984 35.784 62.984C39.816 62.984 43.208 61.96 45.96 59.912C48.776 57.864 50.824 54.92 52.104 51.08H31.272V38.984H66.984V54.248C65.768 58.344 63.688 62.152 60.744 65.672C57.864 69.192 54.184 72.04 49.704 74.216C45.224 76.392 40.168 77.48 34.536 77.48C27.88 77.48 21.928 76.04 16.68 73.16C11.496 70.216 7.432 66.152 4.488 60.968C1.608 55.784 0.168 49.864 0.168 43.208C0.168 36.552 1.608 30.632 4.488 25.448C7.432 20.2 11.496 16.136 16.68 13.256C21.864 10.312 27.784 8.84 34.44 8.84C42.504 8.84 49.288 10.792 54.792 14.696C60.36 18.6 64.04 24.008 65.832 30.92H47.688ZM126.573 49.352C126.573 50.888 126.477 52.488 126.285 54.152H89.133C89.389 57.48 90.445 60.04 92.301 61.832C94.221 63.56 96.557 64.424 99.309 64.424C103.405 64.424 106.253 62.696 107.853 59.24H125.325C124.429 62.76 122.797 65.928 120.429 68.744C118.125 71.56 115.213 73.768 111.693 75.368C108.173 76.968 104.237 77.768 99.885 77.768C94.637 77.768 89.965 76.648 85.869 74.408C81.773 72.168 78.573 68.968 76.269 64.808C73.965 60.648 72.813 55.784 72.813 50.216C72.813 44.648 73.933 39.784 76.173 35.624C78.477 31.464 81.677 28.264 85.773 26.024C89.869 23.784 94.573 22.664 99.885 22.664C105.069 22.664 109.677 23.752 113.709 25.928C117.741 28.104 120.877 31.208 123.117 35.24C125.421 39.272 126.573 43.976 126.573 49.352ZM109.773 45.032C109.773 42.216 108.813 39.976 106.893 38.312C104.973 36.648 102.573 35.816 99.693 35.816C96.941 35.816 94.605 36.616 92.685 38.216C90.829 39.816 89.677 42.088 89.229 45.032H109.773ZM165.089 63.08V77H156.737C150.785 77 146.145 75.56 142.817 72.68C139.489 69.736 137.825 64.968 137.825 58.376V37.064H131.297V23.432H137.825V10.376H154.241V23.432H164.993V37.064H154.241V58.568C154.241 60.168 154.625 61.32 155.393 62.024C156.161 62.728 157.441 63.08 159.233 63.08H165.089ZM202.833 17.864C199.953 17.864 197.585 17.032 195.729 15.368C193.937 13.64 193.041 11.528 193.041 9.032C193.041 6.472 193.937 4.36 195.729 2.696C197.585 0.967995 199.953 0.103994 202.833 0.103994C205.649 0.103994 207.953 0.967995 209.745 2.696C211.601 4.36 212.529 6.472 212.529 9.032C212.529 11.528 211.601 13.64 209.745 15.368C207.953 17.032 205.649 17.864 202.833 17.864ZM210.993 23.432V77H194.577V23.432H210.993ZM255.53 22.856C261.802 22.856 266.794 24.904 270.506 29C274.282 33.032 276.17 38.6 276.17 45.704V77H259.85V47.912C259.85 44.328 258.922 41.544 257.066 39.56C255.21 37.576 252.714 36.584 249.578 36.584C246.442 36.584 243.946 37.576 242.09 39.56C240.234 41.544 239.306 44.328 239.306 47.912V77H222.89V23.432H239.306V30.536C240.97 28.168 243.21 26.312 246.026 24.968C248.842 23.56 252.01 22.856 255.53 22.856ZM337.777 63.08V77H329.425C323.473 77 318.833 75.56 315.505 72.68C312.177 69.736 310.513 64.968 310.513 58.376V37.064H303.985V23.432H310.513V10.376H326.929V23.432H337.681V37.064H326.929V58.568C326.929 60.168 327.313 61.32 328.081 62.024C328.849 62.728 330.129 63.08 331.921 63.08H337.777ZM371.305 77.768C366.057 77.768 361.321 76.648 357.097 74.408C352.937 72.168 349.641 68.968 347.209 64.808C344.841 60.648 343.657 55.784 343.657 50.216C343.657 44.712 344.873 39.88 347.305 35.72C349.737 31.496 353.065 28.264 357.289 26.024C361.513 23.784 366.249 22.664 371.497 22.664C376.745 22.664 381.481 23.784 385.705 26.024C389.929 28.264 393.257 31.496 395.689 35.72C398.121 39.88 399.337 44.712 399.337 50.216C399.337 55.72 398.089 60.584 395.593 64.808C393.161 68.968 389.801 72.168 385.513 74.408C381.289 76.648 376.553 77.768 371.305 77.768ZM371.305 63.56C374.441 63.56 377.097 62.408 379.273 60.104C381.513 57.8 382.633 54.504 382.633 50.216C382.633 45.928 381.545 42.632 379.369 40.328C377.257 38.024 374.633 36.872 371.497 36.872C368.297 36.872 365.641 38.024 363.529 40.328C361.417 42.568 360.361 45.864 360.361 50.216C360.361 54.504 361.385 57.8 363.433 60.104C365.545 62.408 368.169 63.56 371.305 63.56ZM460.942 23.432V77H444.526V69.704C442.862 72.072 440.59 73.992 437.71 75.464C434.894 76.872 431.758 77.576 428.302 77.576C424.206 77.576 420.59 76.68 417.454 74.888C414.318 73.032 411.886 70.376 410.158 66.92C408.43 63.464 407.566 59.4 407.566 54.728V23.432H423.886V52.52C423.886 56.104 424.814 58.888 426.67 60.872C428.526 62.856 431.022 63.848 434.158 63.848C437.358 63.848 439.886 62.856 441.742 60.872C443.598 58.888 444.526 56.104 444.526 52.52V23.432H460.942ZM469.469 50.216C469.469 44.648 470.589 39.784 472.829 35.624C475.133 31.464 478.301 28.264 482.333 26.024C486.429 23.784 491.101 22.664 496.349 22.664C503.069 22.664 508.669 24.424 513.149 27.944C517.693 31.464 520.669 36.424 522.077 42.824H504.605C503.133 38.728 500.285 36.68 496.061 36.68C493.053 36.68 490.653 37.864 488.861 40.232C487.069 42.536 486.173 45.864 486.173 50.216C486.173 54.568 487.069 57.928 488.861 60.296C490.653 62.6 493.053 63.752 496.061 63.752C500.285 63.752 503.133 61.704 504.605 57.608H522.077C520.669 63.88 517.693 68.808 513.149 72.392C508.605 75.976 503.005 77.768 496.349 77.768C491.101 77.768 486.429 76.648 482.333 74.408C478.301 72.168 475.133 68.968 472.829 64.808C470.589 60.648 469.469 55.784 469.469 50.216ZM563.786 22.856C569.93 22.856 574.858 24.904 578.57 29C582.282 33.032 584.138 38.6 584.138 45.704V77H567.818V47.912C567.818 44.328 566.89 41.544 565.034 39.56C563.178 37.576 560.682 36.584 557.546 36.584C554.41 36.584 551.914 37.576 550.058 39.56C548.202 41.544 547.274 44.328 547.274 47.912V77H530.858V5.96H547.274V30.632C548.938 28.264 551.21 26.376 554.09 24.968C556.97 23.56 560.202 22.856 563.786 22.856ZM692.786 23.432L678.29 77H660.146L651.698 42.248L642.962 77H624.914L610.322 23.432H626.738L634.322 61.736L643.346 23.432H660.722L669.842 61.544L677.33 23.432H692.786ZM707.302 17.864C704.422 17.864 702.054 17.032 700.198 15.368C698.406 13.64 697.51 11.528 697.51 9.032C697.51 6.472 698.406 4.36 700.198 2.696C702.054 0.967995 704.422 0.103994 707.302 0.103994C710.118 0.103994 712.422 0.967995 714.214 2.696C716.07 4.36 716.998 6.472 716.998 9.032C716.998 11.528 716.07 13.64 714.214 15.368C712.422 17.032 710.118 17.864 707.302 17.864ZM715.462 23.432V77H699.046V23.432H715.462ZM757.214 63.08V77H748.862C742.91 77 738.27 75.56 734.942 72.68C731.614 69.736 729.95 64.968 729.95 58.376V37.064H723.422V23.432H729.95V10.376H746.366V23.432H757.118V37.064H746.366V58.568C746.366 60.168 746.75 61.32 747.518 62.024C748.286 62.728 749.566 63.08 751.358 63.08H757.214ZM799.286 22.856C805.43 22.856 810.358 24.904 814.07 29C817.782 33.032 819.638 38.6 819.638 45.704V77H803.318V47.912C803.318 44.328 802.39 41.544 800.534 39.56C798.678 37.576 796.182 36.584 793.046 36.584C789.91 36.584 787.414 37.576 785.558 39.56C783.702 41.544 782.774 44.328 782.774 47.912V77H766.358V5.96H782.774V30.632C784.438 28.264 786.71 26.376 789.59 24.968C792.47 23.56 795.702 22.856 799.286 22.856ZM71.304 166.856C77.96 166.856 83.24 168.872 87.144 172.904C91.112 176.936 93.096 182.536 93.096 189.704V221H76.776V191.912C76.776 188.456 75.848 185.8 73.992 183.944C72.2 182.024 69.704 181.064 66.504 181.064C63.304 181.064 60.776 182.024 58.92 183.944C57.128 185.8 56.232 188.456 56.232 191.912V221H39.912V191.912C39.912 188.456 38.984 185.8 37.128 183.944C35.336 182.024 32.84 181.064 29.64 181.064C26.44 181.064 23.912 182.024 22.056 183.944C20.264 185.8 19.368 188.456 19.368 191.912V221H2.952V167.432H19.368V174.152C21.032 171.912 23.208 170.152 25.896 168.872C28.584 167.528 31.624 166.856 35.016 166.856C39.048 166.856 42.632 167.72 45.768 169.448C48.968 171.176 51.464 173.64 53.256 176.84C55.112 173.896 57.64 171.496 60.84 169.64C64.04 167.784 67.528 166.856 71.304 166.856ZM101.313 194.12C101.313 188.616 102.337 183.784 104.385 179.624C106.497 175.464 109.345 172.264 112.929 170.024C116.513 167.784 120.513 166.664 124.929 166.664C128.705 166.664 132.001 167.432 134.817 168.968C137.697 170.504 139.905 172.52 141.441 175.016V167.432H157.857V221H141.441V213.416C139.841 215.912 137.601 217.928 134.721 219.464C131.905 221 128.609 221.768 124.833 221.768C120.481 221.768 116.513 220.648 112.929 218.408C109.345 216.104 106.497 212.872 104.385 208.712C102.337 204.488 101.313 199.624 101.313 194.12ZM141.441 194.216C141.441 190.12 140.289 186.888 137.985 184.52C135.745 182.152 132.993 180.968 129.729 180.968C126.465 180.968 123.681 182.152 121.377 184.52C119.137 186.824 118.017 190.024 118.017 194.12C118.017 198.216 119.137 201.48 121.377 203.912C123.681 206.28 126.465 207.464 129.729 207.464C132.993 207.464 135.745 206.28 137.985 203.912C140.289 201.544 141.441 198.312 141.441 194.216ZM177.989 161.864C175.109 161.864 172.741 161.032 170.885 159.368C169.093 157.64 168.197 155.528 168.197 153.032C168.197 150.472 169.093 148.36 170.885 146.696C172.741 144.968 175.109 144.104 177.989 144.104C180.805 144.104 183.109 144.968 184.901 146.696C186.757 148.36 187.685 150.472 187.685 153.032C187.685 155.528 186.757 157.64 184.901 159.368C183.109 161.032 180.805 161.864 177.989 161.864ZM186.149 167.432V221H169.733V167.432H186.149ZM214.462 149.96V221H198.046V149.96H214.462ZM234.038 221.768C231.158 221.768 228.79 220.936 226.934 219.272C225.142 217.544 224.246 215.432 224.246 212.936C224.246 210.376 225.142 208.232 226.934 206.504C228.79 204.776 231.158 203.912 234.038 203.912C236.854 203.912 239.158 204.776 240.95 206.504C242.806 208.232 243.734 210.376 243.734 212.936C243.734 215.432 242.806 217.544 240.95 219.272C239.158 220.936 236.854 221.768 234.038 221.768Z" fill="black"/></svg>
                <br/><a href="mailto:mayankku1307@gmail.com" className="font-weight-bold text-dark px-1 py-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm10.282 1.472c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601-4.967 0-7.744 3.149-7.744 7.073 0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z"/></svg>  E-mail</a>
            </div>
            <img className="col-12 col-md-6 py-5" src="https://media.giphy.com/media/HoffxyN8ghVuw/giphy.gif" alt=""/>
        </div>
        </div>
  );
}}
export default ContactUs;