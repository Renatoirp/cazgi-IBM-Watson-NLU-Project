import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
        let ctr = 0;  
        return (  
            <div class="row justify-content-center">
            <div class="col-auto">
            <table className="table table-responsive table-striped w-auto ">
                <thead>
                        <tr >
                            <th>#</th>
                            <th>Emotions</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                <tbody>
                {
                    // Use the .map method to extract the emotions
                    Object.entries(this.props.emotions).map( emotion => (
                        <tr>
                            <td>{ctr++}</td>
                            <td>{emotion[0]}</td>
                            <td>{emotion[1]}</td>
                        </tr>
                    ))

                }
                </tbody>
            </table>
            </div>
            </div>
        );
    }
    
}
export default EmotionTable;
